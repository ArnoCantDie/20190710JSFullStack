import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import { async } from 'q';

Vue.use(iView);

Vue.config.productionTip = false

// 每一次切换路由时，beforeEach都执行
router.beforeEach(async (to, from, next) => {
  // console.log("hello")  isLogin是否登录了
  let isLogin = await store.dispatch('validate')
  // console.log(isLogin)
  console.log(to)
  // to.matched.some(function(match){
  //   return match.meta.needLogin
  // })
  // needLogin  表示哪些路由需要在登录条件下才能访问
  let needLogin = to.matched.some(match=>match.meta.needLogin)
  if(needLogin){
    // 需要登录
    if(isLogin){
      // 登录过了
      next()
    }else{
      next("/login")
    }
  }else{
    // 不需要登录
    if(isLogin && to.path === "/login"){
      next("/");
    }else{
      next()
    }
    
  }
  // next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
