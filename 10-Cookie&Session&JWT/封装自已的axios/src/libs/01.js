import axios from "axios"  // 封装一个比较好用的axios
// 明天把process给说了
class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV == "production" ? "/" : "http://localhost:3030"
        this.timeout = 3000;
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    request(options){
        let instance = axios.create();
        let config = this.merge(options);
        return instance(config)
    }
}

export default new AjaxRequest;

// request("/user","post","name=z3")      axios.get()    axios.post()
























