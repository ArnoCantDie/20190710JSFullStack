// 管理Home页的状态
import {ajaxCategory} from "@/api/home"
import * as types from "../actions-type"
export default{
    namespaced: true,
    state:{
        categories:[],  // 放分类信息
        currentMovie:-1  // 当前的分类
    },
    mutations: {
        [types.SET_CATEGORIES](state,payload){
            state.categories = payload; 
        },
        [types.SET_CURRENT_MOVIE](state,currentMovie){
            state.currentMovie = currentMovie;
        }
    },
    actions: {
        async [types.SET_CATEGORIES]({commit}){
            let cgs = await ajaxCategory(); 
            commit(types.SET_CATEGORIES,cgs)
        }
    }
}