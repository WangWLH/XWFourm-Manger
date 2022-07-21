<template>
    <XWTable
       :tableHead="tableHead"
       :tableData="userData"
    >
    </XWTable>
</template>

<script>
import XWTable from '@/components/common/commonTable.vue';
export default {
    data() {
        return {
            userData: [],
            tableHead: [
                { label: "用户名", prop: "username", align: "center", type: "text" },
                { label: "头像", align: "left", type: "image",id:"avatar" },
                { label: "最后登录IP", prop: "last_login_ip", align: "left", type: "text" },
                { label: "最后登录时间", prop: "last_login_date", align: "left", type: "date" },
                { label: "注册时间",prop: "register_date" ,align: "left", type: "date" },
                { label: "操作", align: "left", type: "button", isOperation: true },
            ],
        }
    },
    components: {
        XWTable
    },
    created() {
        let _this = this;
        _this.getUser();
    },
    methods: {
        //获取用户列表数据
        getUser() {
            let _this = this;
            _this.$http.post('/apis/getUser', {

            }).then(res => {
                _this.userData = res.data.data
            })
        }
    }
}
</script>

<style>
</style>