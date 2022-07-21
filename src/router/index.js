import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerPath.js'

Vue.use(VueRouter)

// 默认路由  404/login....
const defaultRouters = [
  {
    path: '*',
    name: '404',
    component: () => import('../views/404/404.vue'),
  }
]
// 动态路由
const DynamicRouters = routes;

const router = new VueRouter({
  routes: DynamicRouters.concat(defaultRouters)
})
export default router
