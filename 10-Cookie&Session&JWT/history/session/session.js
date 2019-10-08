const http = require("http");
const querystring = require("querystring");
let uuid = require("uuid")
let cardName = "tian"
// 先把session存储到内存中    后面我们会把session数据存储到数据库
let session = {};
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
        let id = req.getCookie(cardName);
        if(id){  // 有卡  
            // session[id].mny = session[id].mny - 100
            session[id].mny -= 100
            res.end("current money is $"+session[id].mny)
        }else{
            let cartId = uuid.v4();
            // console.log(cartId) // c1cddd32-e6f7-40fa-9fed-b711489a4bf9
            session[cartId] = {mny:500}
            res.setCookie(cardName,cartId)
            res.end("current money is $500")
        }
        res.end("eat...")
    }
}).listen(3000);