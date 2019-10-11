// 引入生产环境和开发环境的webpack的配置文件
const dev = require("./webpack.dev")
const prod = require("./webpack.prod")
const path = require("path");
const merge = require("webpack-merge")
module.exports = (env)=>{
    // console.log("base...")
    // console.log(env)  
    let isDev = env.development;
    // console.log(isDev)
    // base中配置是的开发和生产中共同有的配置
    const base = {
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        }
    }
    if(isDev){
        // 开发模式
       return merge(base,dev)
    }else{
        // 生产模式
       return merge(base,prod)
    }

}