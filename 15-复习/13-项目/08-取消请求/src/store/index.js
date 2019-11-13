import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import * as types from "./actions-type"
import {login} from "@/api/user"
import {Toast} from "cube-ui"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state:{
    ajaxToken:[],   // 放了所有的请求
    user:{}  // 保存着用户信息
  },
  mutations: {
    [types.PUSH_TOKEN](state,cancel){
      state.ajaxToken = [...state.ajaxToken,cancel]
      // state.ajaxToken.push(payload)
    },
    [types.CLEAR_TOKEN](state){
      state.ajaxToken.forEach(cancel=>cancel())
      state.ajaxToken = [];
    },
    [types.SET_USER](state,payload){
      state.user = payload
    }
  },
  actions: {
    async [types.LOGIN]({commit},user){
      try{
        let result = await login(user)
        commit(types.SET_USER,result)
      }catch(e){
        Toast.$create({
          txt:"无法登录",
          time:2000
        }).show()
      }
    }
  }
})
