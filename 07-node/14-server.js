let http = require("http")
let url = require("url")
let server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url)
    res.setHeader("content-type","text/html;charset=utf-8")
    if(pathname == "/shop"){
        res.end("<h1>商店页面</h1>")
    }
    if(pathname == "/info"){
        res.end("<h1>个人中心页面</h1>")
    }
    if(pathname == "/my"){
        res.end("<h1>我的页面</h1>")
    }
})
server.listen(3030)

// 客户端post请求   给服务器请求正文：name=wangcai&age=18
// 服务器接收请求正文  把数据转成对象，返回给客户端