import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import * as types from "./actions-type"
import { login, validate } from "@/api/user"
import { Toast } from "cube-ui"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state: {
    ajaxToken: [],   // 放了所有的请求
    user: {},  // 保存着用户信息
    hasPermission: false
  },
  mutations: {
    [types.PUSH_TOKEN](state, cancel) {
      state.ajaxToken = [...state.ajaxToken, cancel]
      // state.ajaxToken.push(payload)
    },
    [types.CLEAR_TOKEN](state) {
      state.ajaxToken.forEach(cancel => cancel())
      state.ajaxToken = [];
    },
    [types.SET_USER](state, payload) {
      state.user = payload
      state.hasPermission = true
    }
  },
  actions: {
    async [types.LOGIN]({ commit }, user) {
      try {
        let result = await login(user)
        // 把token持久化
        localStorage.setItem("token", result.token)
        commit(types.SET_USER, result)
      } catch (e) {
        Toast.$create({
          txt: "无法登录",
          time: 2000
        }).show()
      }
    },
    async [types.VALIDATE]({ commit }) {
      try {
        
        // 如果验证出没有登录
        // 如果难出登录过来，user就是用户信息
        let user = await validate();
        // console.log("---------------",user)
        commit(types.SET_USER, user)
        return true;
      } catch (e) {
        // debugger
        return false;
      }
    }
  }
})
