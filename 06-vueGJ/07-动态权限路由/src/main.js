import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

// 根据权限动态在添加路由，也就是说路由现在分成两个部分，一部是有权限，后端给你返回的，另一部分是没有权限的
router.beforeEach(async (to, from, next) => {
  // 当前有没有获取过权限，如果获取过了，就不要在去获取了
  if(!store.state.hasRules){
    await store.dispatch("getMenuList")
    let r = await store.dispatch('getAuthRoute')
    router.addRoutes(r)
    next();
  }else{
    // 已经获取过权限了，可以访问页面了
    next(); 
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
