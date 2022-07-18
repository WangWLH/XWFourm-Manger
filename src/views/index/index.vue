<template>
    <div class="index">
        <el-container>
            <el-aside width="auto">
                <!-- Aside -->
                <x-menu></x-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- Header -->
                    <nav-menu></nav-menu>
                </el-header>
                <el-main>
                    <!-- main -->
                    <!-- <main-table></main-table> -->
                    <homePage></homePage>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import xMenu from '../../components/menu.vue';
import mainTable from '../../components/mainTable.vue';
import navMenu from '../../components/navMenu.vue'
import homePage from '@/components/user/homePage.vue';
export default {
    data() {
        return {};
    },
    components: {
        xMenu, mainTable, navMenu,homePage
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
    background-color: #e9eef3;
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