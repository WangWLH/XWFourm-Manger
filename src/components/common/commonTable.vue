<template>
    <div class="commonTable">
        <el-table :data="tableData" :stripe="stripe" style="width: 100%" :border="border" ref="multipleTable" @selection-change="selectionChange">
            <el-table-column type="index" label="序号" width="50" v-if="isShowindex"></el-table-column>
            <el-table-column
                type="selection"
                width="55"
                v-if="isShowSelection"
            >
            </el-table-column>
            <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item.label" :width="item.width" :align="item.align">
                <template slot-scope="scope">
                    <span v-if="item.type == 'date'">
                        {{scope.row[item.prop] | date}}
                    </span>
                    <span v-else>
                         {{scope.row[item.prop]}}
                    </span>
                    <!-- switch -->
                    <el-switch v-model="scope.row.switch" v-if="item.type == 'switch'" active-color="#13ce66"
                        inactive-color="#ff4949" @change="changeSwitch(scope.row.switch)">
                    </el-switch>
                    <!-- 图片 -->
                    <el-image
                        v-if="item.type=='image'"
                        style="width: 100px; height: 100px"
                        :src="scope.row[item.id]"
                        fit="contain"
                        :preview-src-list="srcList"
                        @click="previewSrcList(item.id)"
                    ></el-image>
                    <!-- 操作按钮 -->
                    <span v-if="item.isOperation">
                        <el-button type="primary" icon="el-icon-edit" circle @click="editRow(scope.row)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="delRow(scope.row)"></el-button>
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        //表格数据
        tableData: {
            type: Array,
            required: true
        },
        //表头数据
        tableHead: {
            type: Array,
            required: true
        },
        //是否显示斑马条纹
        stripe: {
            type: Boolean,
            default: false
        },
        //是否固定表头  暂时不做
        height: {
            type: Number
        },
        //是否显示边框
        border:{
            type:Boolean,
            default:false
        },
        //是否显示索引
        isShowindex:{
            type:Boolean,
            default:false
        },
        //是否显示全选单选
        isShowSelection:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            value1: "",
            srcList: []
        }
    },
    mounted(){
        this.previewSrcList()
    },
    methods: {
        //修改
        editRow(row){
            this.$emit('editRow',row)
        },
        //删除
        delRow(row){
            this.$emit('delRow',row)
        },
        //更改switch
        changeSwitch(bool){
            this.$emit('changeSwitch',bool)
        },
        // 预览图片数组
        previewSrcList(url){
            let _this = this;
            _this.tableData.forEach(item=>{
                if(url){
                   _this.srcList.push(item[url])
                }
            })
        },
        //表格选中事件
        selectionChange(){
            // this.$refs.multipleTable.selection 选中的数据
            this.$emit('selectionChange',this.$refs.multipleTable.selection)
        }
    },
    filters:{
        //日期过滤器
        date(date){
            if(!date){
                return "暂无数据"
            }
            let now = new Date(date),
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate();
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>