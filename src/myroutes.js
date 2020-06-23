import Router from 'vue-router'
import Vue from 'vue'
import login from "@/components/app/login/Login";
import AppIndex from "@/components/app/AppIndex";
import TodoAdd from "@/components/app/todo/TodoAdd";
import TodoList from "@/components/app/todo/TodoList";
import UndoList from "@/components/app/todo/UndoList";
import DoneList from "@/components/app/todo/DoneList";
import UserInfo from "@/components/app/todo/UserInfo";
import HelloTodo from "@/components/app/todo/HelloTodo";
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
        {path:'/todoadd',name:'todoadd',component:TodoAdd, meta:{requireAuth:true}},
        {path: '/todolist',name: 'todolist',component:TodoList, meta:{requireAuth:true}},
        {path:'/undolist',name:'undolist',component:UndoList, meta:{requireAuth:true}},
        {path:'/donelist',name:'donelist',component:DoneList, meta:{requireAuth:true}},
        {path:'/userInfo',name:'userInfo',component:UserInfo, meta:{requireAuth:true}},
        {path:'/hellotodo',name:'hellotodo',component:HelloTodo, meta:{requireAuth:true}},


      ],
      meta:{
        requireAuth:true
      }

    }

  ]
})
export default router;
