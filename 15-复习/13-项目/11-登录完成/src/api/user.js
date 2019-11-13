import axios from "@/utils/axiosRequest"
// 封装登录的方法
export const login = (user)=>{
    return axios.request({
        url:"/login",
        method:"POST",
        data:user
    })
}

// 封装验证是否登录的方法
export const validate = ()=>{
    return axios.request({
        url:"/validate",
    })
}