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
        let obj = querystring.parse(req.headers.cookie,"; ");
        return obj[key];
    }
    if(req.url === "/write"){
        // res.setCookie("name","wangcai");  
        // res.setCookie("age","100");  
        res.end("write ok ~")
        return
    }
    if(req.url === "/read"){
        res.end(req.getCookie("age") || 'empty');
    }
    if(req.url === "/visit"){
        res.setHeader("Content-type","text/plain; charset=utf8")
        let visit = req.getCookie("visit");
        if(visit){
            // console.log(visit)  // 1
            // console.log(typeof visit) // string
            // console.log(visit-0) // 1
            // console.log(typeof visit-0) // NaN
            // console.log(visit-0+1+"") // "2"
            visit = visit-0+1;
            res.setCookie("visit",visit+"",{httpOnly:true})
        }else{
            visit = 1;
            res.setCookie("visit","1",{httpOnly:true})
        }
        res.end(`当前第${visit}次访问`)
    }
}).listen(3000);