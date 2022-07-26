<template>
    <div class="articelList">
        <!-- <articleTable :tableData="tableData"></articleTable> -->
        <el-button type="primary" @click="addArticle">新增</el-button>
        <XW-table 
            :tableHead="tableHead"
            :tableData="tableData"
            @editRow="editRow"
        >
        </XW-table>
        <pagination 
            :total="total"
            :pageSizes="pageSizes"
            @changeSize="changeSize"
            @changeCurrent="changeCurrent"
            :background="true"
        ></pagination>
         <XW-dialog
          :dialogFormVisible="dialogFormVisible"
          :title="title"
          :formRow="formRow"
          :formData="formData"
          @cancelForm="cancelForm"
          @saveForm="saveForm"
        >
        </XW-dialog>
    </div>
</template>

<script>
import articleTable from './articleTable.vue'
import pagination from '@/components/common/pagination.vue'
import XWTable from '@/components/common/commonTable.vue';
import XWDialog from '@/components/common/XWDialog.vue'
export default {
    inject:['reload'],
    data() {
        return {
            // tableData: [
            //     {
            //         article_Id: "4eebd729-bdcb-4b92-922e-1387df04b3a3",
            //         createdDate: '2022-07-14 05:20:21',
            //         creatUser: 'CC',
            //         content: '你好呀 我是CC',
            //         giveNums: 10,
            //         IP: '192.168.0.253'
            //     },
            //     {
            //         article_Id: "935cf7ed-c599-4b0c-9e8a-3ac3058caf19",
            //         createdDate: '2022-07-14 05:21:21',
            //         creatUser: 'CC',
            //         content: '你在史书上所轻轻翻过的一页，便是他们波澜壮阔的一生。',
            //         giveNums: 0,
            //         IP: '113.110.145.159'
            //     },
            // ],
            tableData: [],
            total:0,
            limit:2,
            pageSizes:[],
            tableHead:[
                { label: "发布日期", prop: "createdDate", align: "left", type: "date" },
                { label: "创建人", prop: "creatUser", align: "left", type: "text" },
                { label: "文章内容", prop: "content", align: "left", type: "text" },
                { label: "点赞量",prop: "giveNums" ,align: "left", type: "text" },
                { label: "评论量",prop: "commentNums" ,align: "left", type: "text" },
                { label: "IP",prop: "IP" ,align: "left", type: "text" },
                { label: "操作", align: "left", type: "button", isOperation: true },
            ],
            dialogFormVisible:false,
            title:'编辑文章',
            formRow:[
                { type: 'dateTime',label: "发布日期",prop: "createdDate",placeholder: "请填写发布日期", width: 12, disabled: false},
                { type: 'input',label: "创建人",prop: "creatUser",placeholder: "请填写创建人",width: 12, disabled: false},
                { type: "input",label: "文章内容",prop: "content",placeholder: "请填写文章内容",width: 24, disabled: false,options: ""},
                { type: 'input',label: "点赞量",prop: "giveNums",placeholder: "请填写点赞量", width: 12, disabled: false},
                { type: 'input',label: "评论量",prop: "commentNums",placeholder: "请填写评论量",width: 12, disabled: false},
                { type: 'input',label: "点击量",prop: "Hits",placeholder: "请填写点击量",width: 12, disabled: false},
                { type: 'input',label: "IP",prop: "IP",placeholder: "请填写IP",width: 12, disabled: false},
            ],
            formData:{}
        }
    },
    components: {
        XWTable,
        articleTable,
        pagination,
        XWDialog
    },
    created() {
        let _this = this;
        _this.getTableList();
        _this.pageSizes.push(_this.limit,_this.limit*2)
    },
    methods: {
        //s 切换一页显示s条数据
        getTableList(s) {
            let _this = this;
            //请求接口
            let {limit} = _this;
            let skip = !s ? _this.tableData.length : s;
            _this.$http.post('/get_article_list', {
                skip,
                limit
            }).then(res => {
                if(res.data.code == 200){
                    _this.tableData = res.data.data
                    _this.total = res.data.count
                }
            })
        },
        changeSize(val){
            let _this = this;
            _this.limit = val;
            _this.getTableList(1)
        },
        changeCurrent(val){
            let _this = this;
            _this.getTableList(val)
        },
        //编辑
        editRow(row){
            let _this = this;
            _this.dialogFormVisible = true
            let newrow = JSON.parse(JSON.stringify(row))
            _this.formData = newrow;
        },
        //关闭
        cancelForm(){
            let _this = this;
            _this.dialogFormVisible = false
        },
        //保存
        saveForm(){
            let _this = this;
            _this.formData.article_Id = _this.formData.article_Id ? _this.formData.article_Id : _this.$XWM.Guid();
             _this.$http.post('/EditarticleList',{
                queryInfo:_this.formData
            }).then(res=>{
                _this.reload();
                _this.$message.success(res.data.msg)
                _this.dialogFormVisible = false
            })
        },
        addArticle(){
            let _this = this;
            _this.formData = []
            _this.dialogFormVisible = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.el-button{
    display: flex;
}
</style>