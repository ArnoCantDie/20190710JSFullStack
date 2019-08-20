let http = require("http")
let fs = require("fs")
let path = require("path")
let url = require("url")
let server = http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true)
    let absPath = path.join(__dirname,pathname)
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode = 404
            res.end("not found")
            return;
        }
        if(statObj.isFile()){
            // 表示读取的是一个文件
            fs.createReadStream(absPath).pipe(res)
        }
        console.log(statObj)
    })
})

server.listen(3000)
