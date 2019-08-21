const express = require("express")
const app = express();
const router = express.Router()
router.get("/hello",(req,res)=>{
    res.send("hello")  // Cannot GET /hello
})
// 这里的req,res和原生中的不一样，在原生的基础的进行封装
app.get("/my",(req,res)=>{
    res.send("my")
})
app.post("/my",(req,res)=>{
    res.send("my")
})
app.listen(3000)

// 哪些是get请求，哪些是post请求？
// get: 直接输入一个网址，href，src，表单（method=”get”）
// post: 就是表单 通过设置method=”post”


// 1，对于上面的两种路由方式，重点掌握第一种。
// 2，创建一个针对应用级别的路由，是分步骤：
    // a, 通过express()创建一个app实例
    // b, METHOD是一个HTTP的请求方法，如get请求或post请求， app.get(), app.post()
    // c, path是服务器上的路径，是url中的路径部分，如 “/”  “/user”
    // d,callback当路由匹配成功是要执行一个函数，在这个函数中有两个非常重要的参数，req，res,  req是指incommingMessage, res是指serverResponse