const express = require("express")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"01-jsonp跨域之browser.html"))
})

app.listen(5555)

// Uncaught SyntaxError: Unexpected token :

// 如果你不想让它报错，你必须要服务器端返回一个函数调用的字符串，把数据作为这个函数的参数