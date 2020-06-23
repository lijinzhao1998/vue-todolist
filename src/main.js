import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
//在命令行安装npm install vue-router vuex axios element-ui
//第二步：引用vue-router,axios,elementui

import axios from "axios"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import router from "./myroutes";
import store from "@/store";



Vue.config.productionTip = false
//第三步：在Vue中使用ElementUI，Router
Vue.use(ElementUI);
Vue.use(Vuex);
//第四步：把axios加载到vue
//设置axios服务器地址（也可写在 一个配置文件里）
axios.defaults.baseURL="http://127.0.0.1:8090"
//然后可以在任意地方通过this.$axios引用axios
Vue.prototype.$axios=axios
//第五步：定义路由（路由表随着 应用规模扩大，会越来越大，可以抽出去成一个独立的js）
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.userLoginId) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)


new Vue({
  //第六步:使用Vue路由
  router,
  store,
  render: h => h(App),
}).$mount('#app')
