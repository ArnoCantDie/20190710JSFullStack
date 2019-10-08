const http = require("http");
http.createServer((req,res)=>{
    let arr = [];
    res.setCookie = function(key,value,options={}){
        let opts = [];
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        // [domain=.wangcai.cn,  path=/]  ---》 domain=.wangcai.cn; path=/
        // res.setHeader("Set-Cookie","name=wangcai; domain=.wangcai.cn; path=/ ");
        arr.push(`${key}=${value}; ${opts.join("; ")}`)
        res.setHeader('Set-Cookie', arr);
    }
    if(req.url === "/write"){
        // 要给浏览器种植一个cookie
        res.setCookie("name","wangcai1");
        // res.setCookie("age","100");
        // res.setCookie("address","helloworld")
        // res.setCookie("name","wangcai",{domain:'.wangcai.cn',maxAge:1000});
        res.end("write ok ~")
        return
    }
    if(req.url === "/read"){
        res.end(req.headers.cookie || 'empty');
    }
}).listen(3000);