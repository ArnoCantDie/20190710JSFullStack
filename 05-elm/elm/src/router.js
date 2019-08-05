import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from "./views/Login"

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path:"/",
      component:()=>import("./views/index.vue"),
      children:[
        {path:"",redirect:"/home"},
        {path:"/home",name:"home",component:()=>import("./views/Home.vue")},
        {path:"/order",name:"order",component:()=>import("./views/Order.vue")},
        {path:"/me",name:"me",component:()=>import("./views/Me.vue")},
        {path:"/address",name:"address",component:()=>import("./views/Address.vue")},
        {path:"/city",name:"city",component:()=>import("./views/City.vue")},
      ]
    },
    {
      path: "/login",
      component: Login
    }
  ]
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == '/login') {
//     next();
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login');
//   }
// });
export default router
