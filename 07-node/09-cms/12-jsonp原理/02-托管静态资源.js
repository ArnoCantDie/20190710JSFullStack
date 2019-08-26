const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"/"))); 

app.get("/jsonp",(req,res)=>{
    // res.send("alert('hello你好')")

    let cb = req.query.callback; // 得到f1 

    // cb("hello....")  调用了f1
    // res.send(cb+"('hello')")  // 返回一个函数调用

    res.send(cb+"("+JSON.stringify({name:"wangcai",age:"18"})+")")

})

app.listen(3030)