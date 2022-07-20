module.exports = [
    {
        path: '/',
        name: 'index',
        redirect: '/home',
        component: () => import('../views/index/index.vue'),
        meta: {
            icon: 'el-icon-s-home',
            title: '首页'
        },
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import('../components/user/homePage.vue'),
                meta: {
                    icon: 'el-icon-s-home',
                    title: '首页'
                }
            },
        ]
    },
    {
        path: '',
        name: 'articleStatistics',
        component: () => import('../views/index/index.vue'),
        meta: {
            icon: 'el-icon-menu',
            title: '文章管理'
        },
        children:[
            {
                path: '/articleList',
                name: 'articleList',
                component: () => import('../views/Article/articleList.vue'),
                meta: {
                    icon: 'el-icon-s-home',
                    title: '文章列表'
                }
            },
            {
                path: '/articleStatistics',
                name: 'articleStatistics',
                component: () => import('../views/Article/articleStatistics.vue'),
                meta: {
                    icon: 'el-icon-s-data',
                    title: '文章统计'
                }
            },
        ]
    },
    {
        path: '',
        name: 'banner',
        component: () => import('../views/index/index.vue'),
        meta: {
            icon: 'el-icon-menu',
            title: '轮播管理'
        },
        children:[
            {
                path: '/banner',
                name: 'banner',
                component: () => import('../views/Banner/Banner.vue'),
                meta: {
                    icon: 'el-icon-s-home',
                    title: '轮播列表'
                }
            },
        ]
    },
    // {
    //     path: '*',
    //     name: '404',
    //     isHide:true,
    //     component: () => import('../views/404/404.vue'),
    //     meta: {
    //         icon: 'el-icon-s-home',
    //         title: '404'
    //     }
    // }
]