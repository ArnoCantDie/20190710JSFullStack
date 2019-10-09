import Vue from 'vue'
import Vuex from 'vuex'
import {login,validate} from "./api/user"
import {setLocal} from "./libs/local"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowLoading:false,
    username:"wangcai"
  },
  mutations: {
    showLoading(state){
      state.isShowLoading = true;
    },
    hideLoading(state){
      state.isShowLoading = false;
    },
    setUser(state,username){
      state.username = username;
    }
  },
  // actions存放接口的调用  dispatch actions里面放方法
  actions: {
    async toLogin({commit},username){
      let r = await login(username)
      if(r.code === 0){
        // 登录成功了
        commit('setUser',r.username)
        setLocal("token",r.token)
        // console.log("........")
        // console.log(r)
        // console.log(r.token)
        // console.log("........")
      }else{
        return Promise.reject(r.data);
      }
    },
    async validate({commit}){
      let r = await validate();
      if(r.code === 0){
        commit('setUser',r.username)
        setLocal("token",r.token)
      }
      return r.code === 0;  // 返回token是否失效
    }
  }
})
