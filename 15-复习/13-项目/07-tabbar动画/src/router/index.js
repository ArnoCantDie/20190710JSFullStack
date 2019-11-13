import Vue from 'vue'
import VueRouter from 'vue-router'
import loadable from "@/utils/loading"
import Home from "@/views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:'home',
    component:Home,
    meta:{
      idx:0
    }
  },
  {
    path:"/movie",
    name:'movie',
    // 加载Movie组件时，会出现loading效果  高阶组件
    component:loadable(()=>import("@/views/Movie/index.vue")),
    meta:{
      idx:1
    }
  },
  {
    path:"/profile",
    name:'profile',
    component:loadable(()=>import("@/views/Profile/index.vue")),
    meta:{
      idx:2
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
