import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import * as echarts from 'echarts'
import axios from 'axios'
axios.defaults.baseURL = "https://9e6d177d-9fc0-4815-919c-f5e2ff3cd736.bspapp.com/http"
Vue.prototype.$http = axios;

Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
