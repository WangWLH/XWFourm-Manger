<template>
    <div class="banner">
        <!-- 表格 -->
        <XW-table 
           :tableData="tableData"
           :tableHead="tableHead"
           :stripe="true"
           @editRow="editRow"
           @delRow="delRow"
           @changeSwitch="changeSwitch"
        ></XW-table>
        <XW-dialog
          :dialogFormVisible="dialogFormVisibles"
          :title="title"
          :formRow="formRow"
          :formData="formData"
          @cancelForm="cancelForm"
        >
        </XW-dialog>
        <!-- 分页 -->
        <pagination
          :total="total"
        ></pagination>
    </div>
</template>

<script>
import XWTable from '../../components/common/commonTable.vue'
import pagination from '@/components/common/pagination.vue'
import XWDialog from '@/components/common/XWDialog.vue'
export default {
    data() {
        return {
            // tableHead: [
            //     { label: "日期", prop: "date", width: "120", aligin: "left", type: "text" },
            //     { label: "姓名", prop: "name", width: "120", aligin: "left", type: "text" },
            //     { label: "地址", prop: "address", aligin: "left", type: "text" },
            //     { label: "滑块", aligin: "left", type: "switch" },
            //     { label: "图片", aligin: "cebter", type: "image" },
            //     { label: "操作", aligin: "left", type: "button", isOperation: true },
            // ]
            tableData:[],
            tableHead:[
                { label: "zIndex", prop: "zIndex", align: "left", type: "text" },
                { label: "mLeft", prop: "mLeft", align: "left", type: "text" },
                { label: "轮播图", align: "center", type: "image",id:"url" },
                { label: "操作", align: "left", type: "button", isOperation: true },
            ],
            total:0,
            dialogFormVisibles:false,
            formLabelWidth:'120px',
            title:"修改轮播图",
            formRow:[
                { type: 'input',label: "zIndex",prop: "zIndex",placeholder: "请填写zIndex", width: 12, disabled: false},
                { type: 'input',label: "mLeft",prop: "mLeft",placeholder: "请填写mLeft",width: 12, disabled: false},
                { type: "img",label: "轮播图",prop: "url",placeholder: "请选择选择图片",width: 24, disabled: false,options: ""},
            ],
            formData:{}
        }
    },
    components: {
        XWTable,pagination,XWDialog
    },
    created(){
        this.getBannerList()
    },
    methods: {
        getBannerList(){
           let _this = this;
           _this.$http.post('/api/getEDGBanner',{

           }).then(res=>{
              _this.tableData = res.data.data;
              _this.total = res.data.data.length;
           })
        },
        //编辑
        editRow(row){
            let _this = this;
            // let IMGarr = [];  //存放图片的数组
            _this.dialogFormVisibles = true //打开弹窗
            // IMGarr.push({url:row.url}) //给数组添加图片
            // row.url = IMGarr;  //赋值
            _this.formData = row;
            console.log('editRow',row)
        },
        delRow(row){
            let _this = this;
            // let arr = _this.tableData.filter(p=>{
            //     return p._id == row._id;
            // })
            // let index = _this.tableData.indexOf(arr[0])
            let index = _this.tableData.findIndex(item => item._id == row._id);
            _this.tableData.splice(index,1)
        },
        changeSwitch(bool){
            console.log(bool)
        },
        //弹窗点击取消
        cancelForm(){
            this.dialogFormVisibles = false
        },
        //弹窗点击确定
        saveForm(){
            //请求接口
            let _this = this;
            _this.dialogFormVisibles = false;
           
        }
    }
}
</script>

<style>
</style>