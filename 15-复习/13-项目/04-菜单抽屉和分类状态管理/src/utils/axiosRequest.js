import axios from "axios"
import { Toast } from "cube-ui"

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