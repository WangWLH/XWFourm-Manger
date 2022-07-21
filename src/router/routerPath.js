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
            {
                path: '/article',
                name: 'article',
                component: () => import('../views/Article/articleList.vue'),
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
                path: '/banner',
                name: 'banner',
                component: () => import('../views/Banner/Banner.vue'),
                meta: {
                    icon: 'el-icon-s-management',
                    title: '轮播管理'
                },
                children:[
                    {
                        path: '/banner',
                        name: 'banner',
                        component: () => import('../views/Banner/Banner.vue'),
                        meta: {
                            icon: 'el-icon-news',
                            title: '轮播列表'
                        }
                    },
                ]
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/user.vue'),
                meta: {
                    icon: 'el-icon-s-custom',
                    title: '用户管理'
                },
            },
        ]
    },
]