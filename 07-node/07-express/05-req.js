const express = require("express")
// 创建的app 服务器  http.createServer()
const app = express();
// 路由是一个url对应一个资源
app.get("/abc",function(req,res){
    console.log(req.query)
    console.log(req.path)
    res.send("你好，express")
})
app.listen(3000)