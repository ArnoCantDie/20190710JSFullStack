import axios from "axios"
import { Toast } from "cube-ui"
import store from "@/store"
import  * as types from "@/store/actions-type"

class AxiosRequest {
    constructor() {
        // this.baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:3000/api" : "http:api.xxx.com"
        this.baseURL = "http://localhost:3000/api"
        this.timeout = 3000;
        this.toast = Toast.$create({
            txt: '正在加载中...',
            time: 0,
        })
        this.queue = {};
    }
    setInterceptor(instance, url) {
        instance.interceptors.request.use((config) => {
            // 每次请求时，把token带到请求中  Au = token
            config.headers.token = localStorage.getItem("token") || "";

            // 后面每一次请求时，得到一个取消请求方法
            let CancelToken = axios.CancelToken;
            // console.log("CancelToken-->",CancelToken)
            // 给config挂载了cancelToken的对象
            config.cancelToken = new CancelToken(function executor(c) {
                // console.log("c-->",c)
                store.commit(types.PUSH_TOKEN, c)
            })
            // 当点击了tabbar时，页面变了，需要调用cancel方法
            // console.log(config)
            if (Object.keys(this.queue).length === 0) {
                this.toast.show();
            }
            this.queue[url] = url;
            return config;
        }, error => {
            return Promise.reject(error);
        })
        instance.interceptors.response.use((response) => {
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()
            }
            if (response.data.code === 0) {
                return response.data.data
            }else{
                return Promise.reject(res.data)
            }
        }, function (error) {
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()
            }
            return Promise.reject(error);
        });
    }
    request(options) {
        let instance = axios.create()
        let config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
        this.setInterceptor(instance, options.url)
        return instance(config)
    }
}
export default new AxiosRequest;