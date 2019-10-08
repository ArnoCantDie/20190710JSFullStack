const http = require("http");
const querystring = require("querystring");
let uuid = require("uuid")
let cardName = "tian"
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
    req.getCookie = function(key,options = {}){
        let obj = querystring.parse(req.headers.cookie,"; ");
        return obj[key];
    }
    if(req.url === "/eat"){
        if(req.getCookie(cardName)){  // 有卡  

        }else{
            let cartId = uuid.v4();
            console.log(cartId)
        }
        res.end("eat...")
    }
}).listen(3000);