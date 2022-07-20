<template>
    <div class="banner">
        <XW-table 
           :tableData="tableData"
           :tableHead="tableHead"
           :stripe="true"
        ></XW-table>
    </div>
</template>

<script>
import XWTable from '../../components/common/commonTable.vue'
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    switch:true,
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    switch:true,
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    switch:false,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    switch:true,
                },
            ],
            tableHead:[
                {label:"日期",prop:"date",width:"120",aligin:"left",type:"text"},
                {label:"姓名",prop:"name",width:"120",aligin:"left",type:"text"},
                {label:"地址",prop:"address",aligin:"left",type:"text"},
                {label:"滑块",aligin:"left",type:"switch"},
                {label:"操作",aligin:"left",type:"button",isOperation:true},
            ]
        }
    }, 
    components:{
        XWTable
    },
    methods: {
        //  changeSwitch(val){
        //       console.log(val)
        //  }
    }
}
</script>

<style>

</style>