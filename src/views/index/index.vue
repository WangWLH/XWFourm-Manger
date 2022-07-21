<template>
    <div class="index">
        <el-container>
            <el-aside width="auto">
                <!-- Aside -->
                <x-menu :list="routerList" :isShowImage="true"></x-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- Header -->
                    <nav-menu></nav-menu>
                </el-header>
                <el-main>
                    <!-- main -->
                    <!-- 面包屑导航 -->
                    <breadcrumb></breadcrumb>
                    <!-- 面包屑导航 end -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import xMenu from '../../components/menu.vue';
import navMenu from '../../components/navMenu.vue'
import breadcrumb from '@/components/common/breadcrumb.vue';
export default {
    data() {
        return {};
    },
    components: {
        xMenu, navMenu,breadcrumb
    },
    computed:{
        routerList(){
            return this.$router.options.routes[0].children
        }
    },
    created(){

    },
    methods: {
         
    },
};
</script>

<style lang="scss" scoped>
.index {
    height: 100%;
}

.el-header,
.el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 16px;
}

body>.el-container {
    margin-bottom: 40px;
    height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>