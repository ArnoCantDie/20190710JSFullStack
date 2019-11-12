import axios from "axios"

// 请求拦截  token 
// 响应拦截 res.data 
// 保证每一次请求的唯一
class AxiosRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:3000/api" : "http:api.xxx.com"
        this.timeout = 3000;
    }
    // 设置拦截
    setInterceptor(instance, rul) {
        // 请求拦截
        axios.interceptors.request.use((config) => {
            // DOTO...
            console.log("请求拦截")
            return config;
        }, error => {
            // DOTO...
            return Promise.reject(error);
        })
        // 响应拦截
        axios.interceptors.response.use(function (response) {
            // DOTO...
            console.log("响应拦截")
            return response;
        }, function (error) {
             // DOTO...
            return Promise.reject(error);
        });
    }
    request(options) {
        // instance 就可以发出一个请求 返回promise
        let instance = axios.create()
        let config = {
            ...options,
            baseurl: this.baseURL,
            timeout: this.timeout
        }
        this.setInterceptor(instance, options.url)
        return instance(config)
    }
}
// 导出ajax对象
export default new AxiosRequest;

// let ax = new AxiosRequest()
// ax.request({url:"/getnews",methods:"post","name:"xx"}).then(data=>{})