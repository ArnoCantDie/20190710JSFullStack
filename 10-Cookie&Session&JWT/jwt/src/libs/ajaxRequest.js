import axios from "axios" 
import store from "../store"
import {getLocal} from "../libs/local"
// 当第一次请求时，显示loading
class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV == "production" ? "/" : "http://localhost:3030"
        this.timeout = 3000;
        this.queue = {}; // 存放每一次的请求
    }
    // 合并参数
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    // 拦截
    setInterceptor(instance,url){
        // 每次请求时，都要加上一个loading效果
        instance.interceptors.request.use((config)=>{
            // console.log(getLocal("token"))
            // 在请求拦截中，每次请求，都会加上一个Authorization头
            config.headers.Authorization = getLocal("token");
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
    // request方法就是专门用来发出请求的
    request(options){
        let instance = axios.create(); // 第1步：创建一个axios实例
        this.setInterceptor(instance,options.url); // 设置拦截
        let config = this.merge(options);
        return instance(config) // 第2步：发出请求
    }
}
export default new AjaxRequest;
























