import Vue from "vue"
import Router from "./vue-router"
import Home from "./Home"
import About from "./About"

Vue.use(Router) // Router中一个插件     中间件   body-parser   Nginx 
// 如果自己要写一个插件，在vue中必须通过vue.use来使用这个插件
// 这个插件中必须有一个install 
// install方法中第一个参数是Vue构造器
 
// const Vue = require("vue")
// console.log(Vue)
export default new Router({
    mode:"hash",
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/about",
            component:About
        }
    ]
})
