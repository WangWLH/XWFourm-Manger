<template>
    <div class="articelList">
        <articleTable :tableData="tableData"></articleTable>
        <pagination 
        :total="total"
        :pageSizes="pageSizes"
        @changeSize="changeSize"
        @changeCurrent="changeCurrent"
        :background="true"
        ></pagination>
    </div>
</template>

<script>
import articleTable from './articleTable.vue'
import pagination from '@/components/common/pagination.vue'
export default {
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
            pageSizes:[]
        }
    },
    components: {
        articleTable,
        pagination
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
                console.log('res', res)
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
            console.log(val)
            _this.getTableList(val)
        }
        
    }
}
</script>

<style>
</style>