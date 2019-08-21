const express = require("express")
const app = express();
app.get("/",function(req,res){
    // res.send("你好，express")
    // res.send("<ul><li>html</li><li>css</li></ul>")

    // C:\Users\Administrator\Desktop\20190710JSFullStack\07-node
    // console.log(__dirname)
    // res.sendFile(__dirname+"/index.html")

    // res.json({name:"wangcai",age:"100"}) // {"name":"wangcai","age":"100"}

    res.redirect("/login")

})
app.get("/login",(req,res)=>{
    res.send("登录页面")
})
app.listen(3000)