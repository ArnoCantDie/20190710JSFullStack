// 管理Home页的状态
import {ajaxCategory} from "@/api/home"
export default{
    namespaced: true,
    state:{
        categories:[]  // 放分类信息
    },
    mutations: {
        setCategories(state,payload){
            // 给categories赋数据
            state.categories = payload; 
        }
    },
    actions: {
        async setCategories({commit}){
            let cgs = await ajaxCategory(); 
            commit("setCategories",cgs)
        }
    }
}