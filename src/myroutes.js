import Router from 'vue-router'
import Vue from 'vue'
import login from "@/components/app/login/Login";
import AppIndex from "@/components/app/AppIndex";
import TodoAdd from "@/components/app/todo/TodoAdd";
import TodoList from "@/components/app/todo/TodoList";
import UndoList from "@/components/app/todo/UndoList";
import DoneList from "@/components/app/todo/DoneList";
import UserInfo from "@/components/app/todo/UserInfo";
Vue.use(Router)
const  router = new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      redirect:'login'
    },
    {
      path: '/login',
      name:'login',
      component:login
    },
    {
      path:'/AppIndex',
      name:'AppIndex',
      component:AppIndex,
      children:[
        {path:'/todoadd',name:'todoadd',component:TodoAdd},
        {path: '/todolist',name: 'todolist',component:TodoList},
        {path:'/undolist',name:'undolist',component:UndoList},
        {path:'/donelist',name:'donelist',component:DoneList},
        {path:'/userInfo',name:'userInfo',component:UserInfo}

      ]
    }

  ]
})
export default router;
