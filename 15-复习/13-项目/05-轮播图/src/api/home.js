// 封装首页中的一些请求方法

// axios  就是我们自己封装的axios
import axios from "@/utils/axiosRequest"

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




// ajaxCategory().then()






// export let a =110;
// export let b = 1220;
// export {
// }















