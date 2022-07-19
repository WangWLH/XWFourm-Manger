import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './routerPath.js'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('../views/index/index.vue'),
//     meta: {
//       icon: 'el-icon-s-home',
//       title: '首页'
//     }
//   },
// ]
const routes = route

const router = new VueRouter({
  routes
})

export default router
