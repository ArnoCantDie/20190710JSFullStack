const express = require("express")

const app = express()

app.get("/newsList",(req,res)=>{
    // res.json({"title":"新闻标题","content":"新闻内容"})
    // 前面想要经过jsonp包装后的数据，那么需要把数据{"title":"新闻标题","content":"新闻内容"}包装一把
    // jsonp规定 返回一个函数调用  函数名？ 
    // 需要返回的数据，作为cb的实参

    // let cb = req.query.callback;
    // res.send(cb+"("+JSON.stringify({"title":"新闻标题","content":"新闻内容"})+")");

    // res.jsonp({"title":"新闻标题","content":"新闻内容"})

    res.jsonp({code:"1",msg:"xxx"})

})

app.listen(3333)

// 前端和后端如果不在同一个域下，有跨域限制  
// 解决方案：前端接收数据使用jsonp的形式接收，如果使用jsonp形式接收，请求的url后面会加上callback="xxxxx"
// 后端要返回一个函数调用,函数名可以通过req.query.callback得到函数名，把数据当作函数的实参 
// let cb = req.query.callback;
// res.send(cb+"("+JSON.stringify({"title":"新闻标题","content":"新闻内容"})+")");
// res.jsonp({"title":"新闻标题","content":"新闻内容"})  语法糖

// 如果后端返回的数据是这样的： res.jsonp({code:"1",msg:"xxx"})
// 前端要想得到数据，声明我接收的数据类型是jsonp
// 在jq中  dataType:"jsonp",

// 跨域：
// 条件1：ajax (axios) + 浏览器   
// 条件2：协议，端口，域名

// json的原理
// 1，jsonp解决跨域，并不是ajax发出的请求  
// 2，jsonp是script中的src发出的请求 ，script标签中的src没有跨域限制

// www.baidu.com/index.html  
// 返回index.html  
// 浏览器发现index.html  img  src  link href  script src
// src  href发出二次请求