const express = require("express")
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/checkUser",function(req,res){
    // 得到wangcai和100
    console.log(req.body)  // { name: 'wangcai', age: '100' }
    console.log(req.body.name)  // wangcai
    console.log(req.body.age)  // 100
    res.send("接收到了post请求")
})
app.listen(3000)