<template>
    <div class="articelList">
        <articleTable :tableData="tableData"></articleTable>
        <pagination :queryInfo="queryInfo"></pagination>
    </div>
</template>

<script>
import articleTable from './articleTable.vue'
import pagination from '@/components/common/pagination.vue'
export default {
    data() {
        return {
            tableData: [
                {
                    createdDate: '2022-07-14 05:20:21',
                    creatUser: 'CC',
                    content: '你好呀 我是CC',
                    giveNums: 10,
                    IP: '192.168.0.253'
                },
                {
                    createdDate: '2022-07-14 05:21:21',
                    creatUser: 'CC',
                    content: '你在史书上所轻轻翻过的一页，便是他们波澜壮阔的一生。',
                    giveNums: 0,
                    IP: '113.110.145.159'
                },
            ],
            queryInfo:{
                "pageSize":10,
                "total":0
            }
        }
    },
    components: {
        articleTable,
        pagination
    },
    created(){
        let _this = this;
        _this.getTableList();
    },
    methods: {
         getTableList(){
            let _this = this;
            //请求接口
             _this.queryInfo.total = _this.tableData.length;
         }
    }
}
</script>

<style>
</style>