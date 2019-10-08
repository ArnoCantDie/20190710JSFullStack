const http = require("http");
const querystring = require("querystring");
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
        arr.push(`${key}=${value}; ${opts.join("; ")}`)
        res.setHeader('Set-Cookie', arr);
    }
    req.getCookie = function(key){
        // console.log(req.headers.cookie)  // name=wangcai; age=100
        // console.log(typeof req.headers.cookie)  // string
        // console.log(querystring.parse(req.headers.cookie))  //  { name: 'wangcai; age=100' }
        // console.log(querystring.parse(req.headers.cookie,"; "))  //  { name: 'wangcai', age: '100' }
        let obj = querystring.parse(req.headers.cookie,"; ");
        return obj[key];
    }
    if(req.url === "/write"){
        res.setCookie("name","wangcai");  // 种植
        res.setCookie("age","100");  // 种植
        // console.log(res.getCookie())  // 获取cookie
        res.end("write ok ~")
        return
    }
    if(req.url === "/read"){
        // req.getCookie("name")
        // res.end(req.headers.cookie || 'empty');
        res.end(req.getCookie("age") || 'empty');
    }
}).listen(3000);