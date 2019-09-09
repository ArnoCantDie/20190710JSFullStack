const http = require("http")
http.createServer((req,res)=>{
    // 允许哪些客户端来访问我
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    // 允许可以添加哪些头，然后来访问我
    res.setHeader("Access-Control-Allow-Headers","token,xxx")
    // 允许哪些方法来访问我
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,PUT,DELETE")
    // 可以每隔半小时，来发送一个options请求
    res.setHeader("Access-Control-Max-Age","1800")
    // 允许客户端携带凭证
    res.setHeader("Access-Control-Allow-Credentials",true)
    if(req.method === "OPTIONS"){
        return res.end()
    }
    if(req.url==="/api"){
        console.log(req.headers)
        res.setHeader("Set-Cookie","name=xiaoqiang")
        res.end(JSON.stringify({name:"wangcai"}))
    }
}).listen(3000)