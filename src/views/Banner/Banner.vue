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
          @cancelForm="cancelForm"
        >
           <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
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
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            dialogFormVisibles:false,
            formLabelWidth:'120px',
            title:"修改轮播图"
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
        editRow(row){
            let _this = this;
            _this.dialogFormVisibles = true
            console.log(row)
        },
        delRow(row){
            let _this = this;
            let arr = _this.tableData.filter(p=>{
                return p._id == row._id;
            })
            let index = _this.tableData.indexOf(arr[0])
            _this.tableData.splice(index,1)
        },
        changeSwitch(bool){
            console.log(bool)
        },
        cancelForm(){
             this.dialogFormVisibles = false
        }
    }
}
</script>

<style>
</style>