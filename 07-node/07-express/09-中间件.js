const express = require("express")
const app = express();
app.use(function(req,res,next){
    console.log("这是一个中间件")
    next(new Error("hello"))
})
app.get("/",function(req,res){
    res.send("你好，express")
})
// 错误处理中间件
app.use(function(err,req,res,next){
    console.log(err)
})
app.listen(3000)