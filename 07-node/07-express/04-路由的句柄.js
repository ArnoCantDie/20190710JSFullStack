const express = require("express")
const app = express();

//路由句柄 (req,res)=>res.send("你好，express")
// req  res    url---> 解析req.url    querystring--->解析查询字符串
// req,res 在原生的基础上，又封装了
// app.get("/",function(req,res){
//     res.send("你好，express1") // 你好，express1
// },function(req,res){
//     res.send("你好，express2")
// })

app.get("/",function(req,res,next){
    // res.send 封装了res.setHeader(), res.write，res.end，
    res.send("你好，express1") // 你好，express1
    next()  //  Cannot set headers after they are sent to the client
},function(req,res){
    // 封装了res.setHeader(), res.write，res.end，
    // res.send("你好，express2")
    console.log("第2个函数调用了....") // 第2个函数调用了....
})
app.listen(3000)