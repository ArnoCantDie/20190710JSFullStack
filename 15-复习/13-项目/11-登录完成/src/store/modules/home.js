// 管理Home页的状态
import { ajaxCategory,ajaxSlides } from "@/api/home"
import * as types from "../actions-type"
export default{
    namespaced: true,
    state:{
        categories:[],  // 放分类信息
        currentMovie:-1,  // 当前的分类
        slides:[], // 轮播图的状态
    },
    mutations: {
        [types.SET_CATEGORIES](state,payload){
            state.categories = payload; 
        },
        [types.SET_SLIDES](state,slides){
            state.slides = slides; 
        },
        [types.SET_CURRENT_MOVIE](state,currentMovie){
            state.currentMovie = currentMovie;
        }
    },
    actions: {
        async [types.SET_CATEGORIES]({commit}){
            let cgs = await ajaxCategory(); 
            
            commit(types.SET_CATEGORIES,cgs)
        },
        async [types.SET_SLIDES]({commit}){
            let slides =  await ajaxSlides();
            // debugger
            // console.log(slides)
            commit(types.SET_SLIDES,slides)
        }
    }
}