// 封装首页中的一些请求方法

// axios  就是我们自己封装的axios
import axios from "@/utils/axiosRequest"
import store from "@/store"

// 封装电影分类的方法 
export const ajaxCategory = ()=>{
    return axios.request({
        url:"/category"
    })
}

// 封装获取轮播图的方法
export const ajaxSlides = ()=>{
    return axios.request({
        url:"/slides"
    })
}

// 封装获取电影列表的方法
export const ajaxMovieList = (size,offset)=>{
    return axios.request({
        // http://localhost:3000/api/lessonList/2?size=3&offset=0
        url:`/lessonList/${store.state.home.currentMovie}?size=${size}&offset=${offset}`
    })
}





// ajaxCategory().then()






// export let a =110;
// export let b = 1220;
// export {
// }















