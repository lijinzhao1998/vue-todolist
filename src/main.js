import Vue from 'vue'
import App from './App.vue'
//在命令行安装npm install vue-router vuex axios element-ui
//第二步：引用vue-router,axios,elementui

import axios from "axios"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import router from "./myroutes";


Vue.config.productionTip = false
//第三步：在Vue中使用ElementUI，Router
Vue.use(ElementUI);

//第四步：把axios加载到vue
//设置axios服务器地址（也可写在 一个配置文件里）
axios.defaults.baseURL="http://localhost:8090"
//然后可以在任意地方通过this.$axios引用axios
Vue.prototype.$axios=axios
//第五步：定义路由（路由表随着 应用规模扩大，会越来越大，可以抽出去成一个独立的js）

new Vue({
  //第六步:使用Vue路由
  router,
  render: h => h(App),
}).$mount('#app')
