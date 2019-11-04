// 封装一个调轮播图的方法
// index 封装了axios
import axios from "./index"

export function getSliders(){
    return axios.get("/getSliders")
}

// 获取电影列表
export function getMovies(currentCategory:string="all",offset:number=0,limit:number=5){
    // let { category = 'all', offset = 0, limit = 5 } = req.query;
    return axios.get(`/getMovies?category=${currentCategory}&offset=${offset}&limit=${limit}`)
}