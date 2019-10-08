import axios from "axios" 
import store from "../store"
// 当第一次请求时，显示loading
class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV == "production" ? "/" : "http://localhost:3030"
        this.timeout = 3000;
        this.queue = {}; // 存放每一次的请求
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    setInterceptor(instance,url){
        // 每次请求时，都要加上一个loading效果
        instance.interceptors.request.use((config)=>{
            config.headers.Authorization = "xxx";
            // console.log(this.queue)  // {}
            // console.log(Object.keys(this.queue))  // []
            // 第1次请求时，显示Loading动画
            if(Object.keys(this.queue).length === 0){
                store.commit('showLoading');
            }
            this.queue[url] = url; 
            return config;
        });
        instance.interceptors.response.use((res)=>{
            delete this.queue[url]
            if(Object.keys(this.queue).length === 0){
                store.commit('hideLoading')
            }
            // store.commit('hideLoading')
            return res.data;
        });
    }
    request(options){
        let instance = axios.create();
        this.setInterceptor(instance,options.url); // 设置拦截
        let config = this.merge(options);
        return instance(config)
    }
}
export default new AjaxRequest;
























