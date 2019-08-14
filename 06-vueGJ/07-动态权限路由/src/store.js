import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { authRoutes } from "./router"
// 转化数据的格式
let formatMenuList = (menuList) => {
  let arr = [];
  // 把后端返回的菜单的数据格式转化成我们需要的格式
  function r(pid) {
    return menuList.filter(menu => {
      if (menu.pid === pid) {
        arr.push(menu.auth)
        let children = r(menu.id)
        menu.children = children.length ? children : null;
        return true;
      }
    })
  }
  return { m: r(-1), a: arr }
}

// getNeedRoutes  
// authList:['cart','cart-list','shop'...]
// authRoutes [{path:"/",component:xx,children:[]}]
let getNeedRoutes = (auth) => {
  function r(authRoutes) {
    return authRoutes.filter(route => {
      if (auth.includes(route.name)) { // 
        if (route.children) {
          route.children = r(route.children)
        }
        return true;
      }
    })
  }
  return r(authRoutes)
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [], // 放菜单数据
    authList: [],
    hasRules: false // 表示没有获取过权限，获取完毕后，要把状必改成true
  },
  mutations: {
    set_menuList(state, m) {
      state.menuList = m;
    },
    set_authList(state, a) {
      state.authList = a;
      state.hasRules = true;
    }
  },
  actions: {
    // 获取后端菜单相关的数据（menuList,authList）
    async getMenuList({ commit }) {
      // axios去请求数据是异步  promise是解决异步的方案之一
      // axios.get("http://localhost:3000/role").then(res=>{
      //   console.log(res.data)
      // })

      let { data } = await axios.get("http://localhost:3000/role")
      let { m, a } = formatMenuList(data.menuList)
      // console.log(m,a)
      commit('set_menuList', m)
      commit('set_authList', a)
    },
    async getAuthRoute({ commit,state}) {
      // 要得到所有权限的路由 路由权限列表
      let r = getNeedRoutes(state.authList)
      return r;
    }
  }
})
