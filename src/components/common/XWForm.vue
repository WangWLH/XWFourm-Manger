<template>
    <el-form ref="form" :model="formData" label-width="80px">
    <el-col :span="item.width ? item.width : 24" v-for="(item,index) in formRow" :key="index">
        <el-form-item :label="item.label">
            <!-- textarea -->
            <el-input v-if="item.type == 'textearea'" type="textarea" v-model="formData[item.prop]" :placeholder="item.placeholder"></el-input>
            <!-- input -->
            <el-input v-if="item.type == 'input'" v-model="formData[item.prop]" :placeholder="item.placeholder"></el-input>
            <!-- select -->
            <el-select v-if="item.type == 'select'" v-model="formData[item.prop]" :placeholder="item.placeholder">
                <el-option 
                   v-for="(select,selectIndex) in item.options" 
                   :key="selectIndex"
                   :label="select.label"
                   :value="select.value"
                >
                </el-option>
            </el-select>
            <!-- switch -->
            <el-switch v-if="item.type == 'switch'" v-model="formData[item.prop]"></el-switch>
            <!-- 单选 -->
            <el-radio-group v-if="item.type == 'radio'" v-model="formData[item.prop]">
                <el-radio 
                    v-for="(rad,radIndex) in item.options"
                    :key="radIndex"
                    :label="rad.label"
                    :value="rad.value"
                ></el-radio>
            </el-radio-group>
            <!-- 多选 -->
             <el-checkbox-group v-if="item.type == 'checkbox'" v-model="formData[item.prop]">
                <el-checkbox 
                    v-for="(opt,optIndex) in item.options"
                    :key="optIndex"
                    :label="opt.label" 
                    name="type">
                </el-checkbox>
            </el-checkbox-group>
            <!-- 日期 -->
            <el-date-picker
                v-if="item.type == 'date'"
                v-model="formData[item.prop]"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
             <!-- 日期范围选择 -->
            <el-date-picker
                v-if="item.type == 'daterange'"
                v-model="formData[item.prop]"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
            </el-date-picker>
            <!-- 日期时间 -->
            <el-date-picker
                v-if="item.type == 'dateTime'"
                v-model="formData[item.prop]"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptionsDateTime">
            </el-date-picker>
            <!-- 日期时间范围 -->
            <el-date-picker
                v-if="item.type == 'datetimerange'"
                v-model="formData[item.prop]"
                type="datetimerange"
                :picker-options="pickerOptionsDateTime"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
            </el-date-picker>
            <!-- 上传 -->
            <span v-if="item.type == 'upload'">
                <el-upload 
                    accept="PNG,JPEG" 
                    :ref="item.prop" 
                    :file-list="formData[item.prop]" 
                    :action="`${uploadUrl}`" 
                    :limit="item.uploadObj.limit" 
                    :on-preview="handlePictureCardPreview" 
                    :on-remove="(file,fileList)=>handleRemove(file,fileList,item.uploadObj.limit,item.prop,index)" 
                    :on-success="(response,file,fileList)=>uploadSuccess(response,file,fileList,item.uploadObj.limit,item.prop,index)"	
                    list-type="picture-card" 
                    :before-upload="beforeAvatarUpload"
                    :auto-upload="true">
					<i slot="default" class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogImgPreview" :modal-append-to-body="true" width="40%">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
            </span>
             <!-- 图片 -->
            <el-image
                v-if="item.type=='img'"
                style="width: 100px; height: 100px"
                :src="formData[item.prop]"
                fit="contain"
                :preview-src-list="[formData[item.prop]]"
            ></el-image>
        </el-form-item>
    </el-col>
    </el-form>
</template>

<script>
export default {
    props:{
        formData:{
            type:Object
        },
        formRow:{
            type:Array
        }
    },
    data() {
        return {
            //日期范围快捷选择
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            //日期时间的范围
            pickerOptionsDateTime: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
            }, 
            dialogImageUrl: '',
            dialogImgPreview: false,
            uploadUrl:'http://81.70.99.163:8000/common/upload',
            // formRow: [  //格式
            //     {
            //         type: 'textearea', //是input
            //         label: "输入框", //字段
            //         prop: "textearea", //字段名
            //         placeholder: "请填写textearea输入框", //提示内容
            //         width: 24, //参考el-col
            //         disabled: false, //是否禁用
            //         rules: [{
            //             required: true,
            //             message: '输入框'
            //         }, ] //验证
            //     },
            //     {
            //         type: 'input', //是input
            //         label: "输入框", //字段
            //         prop: "input", //字段名
            //         placeholder: "请填写input输入框", //提示内容
            //         width: 12, //参考el-col
            //         disabled: false, //是否禁用
            //     },
            //     {
            //         type: "select",
            //         label: "选择框",
            //         prop: "select",
            //         placeholder: "请选择",
            //         width: 12, //参考el-col
            //         disabled: false,
            //         options: [{
            //             label: "options1",
            //             value: "1"
            //         }, {
            //             label: "options2",
            //             value: "2"
            //         }, ],
            //         rules: [{
            //             required: true,
            //             message: '选择框不能为空！'
            //         }]
            //     },
            //     {
            //         type: 'switch', //是input
            //         label: "switch", //字段
            //         prop: "switch", //字段名
            //         width: 12, //参考el-col
            //         disabled: false, //是否禁用
            //     },
            //     {
            //         type: 'radio',
            //         label: "单选框",
            //         prop: "radio",
            //         width: 12, //参考el-col
            //         disabled: false,
            //         options: [{
            //             label: "单选框1",
            //             value: "1"
            //         }, {
            //             label: "单选框2",
            //             value: "2"
            //         }, ],
            //         rules: [{
            //             required: true,
            //             message: '单选框不能为空'
            //         }, ]
            //     },
            //     {
            //         type: 'checkbox',
            //         label: "多选框",
            //         prop: "checkbox",
            //         width: 24, //参考el-col
            //         disabled: false,
            //         options: [{
            //             label: "多选框1",
            //             value: "1"
            //         }, {
            //             label: "多选框2",
            //             value: "2"
            //         }, {
            //             label: "多选框3",
            //             value: "3"
            //         }, {
            //             label: "多选框4",
            //             value: "4"
            //         }],
            //         rules: [{
            //             required: true,
            //             message: '单选框不能为空'
            //         }, ]
            //     },
            //     {
            //         type: "date",
            //         label: "年月日",
            //         prop: "date",
            //         placeholder: "请选择年月日",
            //         width: 12, //参考el-col
            //         disabled: false,
            //         options: "",
            //         rules: [{
            //             required: true,
            //             message: '年月日选择器'
            //         }, ]
            //     },
            //     {
            //         type: "daterange",
            //         label: "日期范围",
            //         prop: "daterange",
            //         placeholder: "请选择日期范围",
            //         width: 12, //参考el-col
            //         disabled: false,
            //         options: "",
            //     },
            //     {
            //         type: "dateTime",
            //         label: "日期时间",
            //         prop: "dateTime",
            //         placeholder: "请选择日期时间",
            //         width: 12, //参考el-col
            //         disabled: false,
            //         options: "",
            //     },
            //     {
            //         type: "datetimerange",
            //         label: "日期时间范围",
            //         prop: "dateTime",
            //         placeholder: "请选择日期时间范围",
            //         width: 24, //参考el-col
            //         disabled: false,
            //         options: "",
            //     },
            //     {
            //         type: "upload",
            //         label: "上传",
            //         prop: "upload",
            //         placeholder: "请选择选择图片",
            //         width: 24, //参考el-col
            //         disabled: false,
            //         options: "",
            //         uploadObj: {
            //             fileType: "2001",
            //             limit: 2, //上传长度限制
            //             hideUpload: false, //是否隐藏上传框
        
            //         },
            //     },
            // ]
        }
    },
    computed:{
        
    },
    created(){
        console.log('formRow',this.formRow);
        console.log('FormformData',this.formData);
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handlePictureCardPreview(file) {
            console.log('handlePictureCardPreview',file)
            this.dialogImageUrl = file.url || file.url[0].url;
            this.dialogImgPreview = true;
        },
        handleRemove(file) {
            console.log(file);
        },
        handleDownload(file) {
            console.log(file);
        },
        uploadSuccess(response,file,fileList,limit,prop,index){
           console.log(response,file,fileList);
        },
        uploadFile(){
            console.log(1);
        },
        beforeAvatarUpload(file){
            console.log('beforeAvatarUpload',file);
            // this.$http.post('http://81.70.99.163:8000/common/upload',{

            // }).then(res=>{
            //     console.log('res',res);
            // }).catch(err=>{
            //     console.log('err',err);
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.el-form{
    text-align: left;
    height: 100%;
}
</style>