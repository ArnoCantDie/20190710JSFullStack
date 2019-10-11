// // 配置自己的webpack   commonjs规范
// // 默认导出一个配置对象
// const path = require("path")
// // console.log(path.resolve(__dirname,"./src/index.js"))  // C:\Users\Administrator\Desktop\mywebpack\src\index.js
// module.exports = {
//     mode:"development",  // 当前是开发模式
//     // 入口  一定要是绝对路径 
//     entry:path.resolve(__dirname,"./src/index.js"),
    // output:{
    //     filename:"bundle.js",
    //     path:path.resolve(__dirname,"dist")
    // }
// }


// module.exports = (env)=>{
//     console.log(env)  // { development: true }  { production: true }
// }