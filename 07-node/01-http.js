let http = require("http")
// // http协议：
//     请求：3个部分：
//         请求行  方法  路径  协议
//         请求头  浏览器添加 自己也可以添加
//         请求正文  给服务器的数据
//     响应：
//         状态码：200 请求成功了
//                 301 永久重写向 
//                 302 临时重写向 
//                 304 缓存
//                 404 服务器找不到请求的资源  
//                 401 无仅限访问 
//                 500 服务器挂了
//         响应头： 一堆的头
//         响应正文：服务器真实给你的数据
// function(req,res){}是回调函数，有请求过来后，会调用这个函数
let server = http.createServer(function(req,res){
    // req 表示请求，是一个可读流     res 表示响应，是 一个可写流
    // console.log(req) // IncomingMessage
    // console.log(req.url) // /  前端的路由：一个url对应一个组件   后端路由：一个url对应资源  /shop?name=%22zhangsan%22

})

let port = 3000
server.listen(port,()=>{
    console.log(`服务器运行在${port}上面...`)
})

// 每一次改变代码，都是需要重启服务器，可装一个模块，叫nodemon，修改完代码后，会自动重启
// 安装：> npm i nodemon -g
// 使用：> nodemon 01-http.js




