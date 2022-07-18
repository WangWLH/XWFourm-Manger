<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="$store.state.isCollapse" router>
        <div class="aside_logo">
            <img src="../assets/aside_logo.png" alt=""></img>
        </div>
        <div v-for="(item, index) in menuList" :key="index">
            <!-- 一级菜单（没有任何子级菜单）-->
            <el-menu-item :index="item.path" v-if="!item.children">
                <i :class="item.meta.icon"></i>
                {{ item.meta.title }}
            </el-menu-item>
            <!-- 一级菜单（有子级菜单）-->
            <el-submenu :index="item.path" v-else>
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    {{ item.meta.title }}
                </template>
                <!-- 遍历二级菜单容器 -->
                <div v-for="(second, secondIndex) in item.children" :key="secondIndex">
                    <!-- 判断二级菜单（没有三级菜单）-->
                    <el-menu-item :index="second.path" v-if="!second.children">
                        <i :class="second.meta.icon"></i>
                        {{ second.meta.title }}
                    </el-menu-item>

                    <!-- 判断二级菜单（有三级菜单）-->
                    <el-submenu :index="second.path" v-if="second.children">
                        <template slot="title">
                            <i :class="second.meta.icon"></i>
                            {{ second.meta.title }}
                        </template>
                        <el-menu-item :index="sub.path" v-for="(sub, subIndex) in second.children" :key="subIndex">
                            {{ sub.meta.title }}
                        </el-menu-item>
                    </el-submenu>
                </div>
            </el-submenu>
        </div>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    path: '/',
                    name: 'index',
                    component: () => import('../views/index/index.vue'),
                    meta: {
                        icon: 'el-icon-menu',
                        title: '首页'
                    }
                },
                // {
                //     path: '/example',
                //     name: 'example',
                //     component: () => import('../views/index/index.vue'),
                //     meta: {
                //         icon: 'el-icon-location',
                //         title: '导航二'
                //     },
                //     children: [
                //         {
                //             path: '/example1',
                //             name: 'example1',
                //             component: () => import('../views/index/index.vue'),
                //             meta: {
                //                 icon: 'el-icon-location',
                //                 title: '导航二-1'
                //             },
                //         }
                //     ]
                // },
                // {
                //     path: '/example2',
                //     name: 'example2',
                //     component: () => import('../views/index/index.vue'),
                //     meta: {
                //         icon: 'el-icon-location',
                //         title: '导航3'
                //     },
                //     children: [
                //         {
                //             path: '/example2-1',
                //             name: 'example2-1',
                //             component: () => import('../views/index/index.vue'),
                //             meta: {
                //                 icon: 'el-icon-location',
                //                 title: '导航3-1'
                //             },
                //             children: [
                //                 {
                //                     path: '/example3-1-1',
                //                     name: 'example3-1-1',
                //                     component: () => import('../views/index/index.vue'),
                //                     meta: {
                //                         icon: 'el-icon-location',
                //                         title: '导航3-1-1'
                //                     },
                //                 }
                //             ]
                //         }
                //     ]
                // },
            ]
        }
    },

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
    min-height: 400px;
}
</style>