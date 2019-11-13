// 放一些路由的钩子
import store from "@/store"
import * as types from "@/store/actions-type"
export default {
    cancelToken:(to,from,next)=>{
        // console.log("cancelToken-->",1)
        // 清除所有的请求方法
        store.commit(types.CLEAR_TOKEN)
        next()
    },
    permission:async(to,from,next)=>{   // 允许
        // console.log("permission-->",2)
        
        // console.log(flag)
        // console.log(to)
        let needLogin = to.matched.some(item=>item.meta.needLogin)
        // needLogin表示是否需要登录   flag表示当前是否登录
        // console.log(needLogin,flag)
        if(!store.state.hasPermission){
            // 是否需要登录   没有权限
            let flag = await store.dispatch(types.VALIDATE) // flag表示是否登录过
            // needLogin表示是否需要登录
            if(needLogin){
                // 需要登录
                if(!flag){
                    // 没有登录
                    next("/login")
                }else{
                    // 登录过来 
                    next()
                }
            }else{
                // 不需要登录
                next()
            }
        }else{
            // 有权限  登录过，但是还要去访问login 
            if(to.name === "login"){
                next("/")
            }else{
                next()
            }
        }
       
    }
}







