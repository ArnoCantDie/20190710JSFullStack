import Vue from 'vue'
import VueRouter from 'vue-router'
import loadable from "@/utils/loading"
import Home from "@/views/Home"
import hooks from "./hook"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:'home',
    component:Home,
    meta:{
      idx:0,
      keepAlive:true, // 需要缓存
    }
  },
  {
    path:"/movie",
    name:'movie',
    // 加载Movie组件时，会出现loading效果  高阶组件
    component:loadable(()=>import("@/views/Movie/index.vue")),
    meta:{
      idx:1,
      keepAlive:true, // 需要缓存
    }
  },
  {
    path:"/profile",
    name:'profile',
    component:loadable(()=>import("@/views/Profile/index.vue")),
    meta:{
      idx:2,
      keepAlive:true, // 需要缓存
    }
  },
  {
    path:"/login",
    name:'login',
    component:loadable(()=>import("@/views/Login/login.vue")),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook=>{
   router.beforeEach(hook)
})

export default router
