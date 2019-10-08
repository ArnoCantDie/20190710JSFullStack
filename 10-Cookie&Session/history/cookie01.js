const http = require("http");

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcome ~")
    }
    if(req.url === "/write"){
        // 种植coolie  通过http头
        // res.setHeader("Set-Cookie","name=wangcai; domain=.wangcai.cn;");
        // res.setHeader("Set-Cookie","name=wangcai; path=/write");
        // res.setHeader("Set-Cookie","name=wangcai; max-age=10");
        // res.setHeader("Set-Cookie","name=wangcai;");
        // res.setHeader("Set-Cookie","name=wangcai; httpOnly=true");

        // 种植多个cookie
        res.setHeader("Set-Cookie",['name=wangcai','age=100']);
        res.end("write ok ~")
        return
    }
    if(req.url === "/read"){
        // 服务器给浏览器种植了cookie，浏览器再去请求服务器时，会带上cookie
        // 服务器就可以通过req.header.cookie来获取cookie
        res.end(req.headers.cookie || 'empty');
    }
}).listen(3000);