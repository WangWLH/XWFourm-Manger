<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="$store.state.isCollapse"
        router>
        <div class="aside_logo" v-if="isShowImage">
            <img src="../assets/aside_logo.png" alt="" />
        </div>
        <div v-for="(item,index) in list" :key="index">
            <el-menu-item :index="item.path" v-if="!item.children" style="margin-left:30px;">
                <i :class="item.meta.icon"></i>
                {{ item.meta.title }}
            </el-menu-item>
             <el-submenu :index="item.path" v-else style="margin-left:10px;">
                <template slot="title">
                     <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item-group>
                    <!-- 递归组件 适应多层 -->
                    <x-menu :list="item.children" :isShowImage="false"></x-menu>  
                </el-menu-item-group>
            </el-submenu>
        </div>
    </el-menu>
</template>

<script>
export default {
    name:"xMenu",
    props:{
       list:Array,   //传递过来的数组
       isShowImage:Boolean,  //是否展示图片
    },
    data() {
        return {
            
        }
    },
    created() {
           
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        changeSilder(path) {
            this.$router.push(path)
        }
    },
};
</script>

<style lang="scss" scoped>
.el-menu {
    border: none;
    height: 100%;
}

.aside_logo {
    position: relative;
    height: 64px;
    overflow: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 64px;
    width: 100%;

    img {
        width: 100%;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
}
</style>