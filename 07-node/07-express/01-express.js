const express = require("express")
// 创建的app 服务器  http.createServer()
const app = express();
// 路由是一个url对应一个资源
app.get("/",function(req,res){
    res.send("你好，express")
})
app.get("/my",function(req,res){
    res.send("个人中心")
})
app.get("/shop",function(req,res){
    res.send("商店")
})
app.get("/list",function(req,res){
    res.send("列表")
})
app.listen(3000)