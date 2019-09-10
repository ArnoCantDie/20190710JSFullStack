import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
let {readdir ,stat} = fs.promises

import mime from "mime"
import chalk from "chalk"
import ejs from "ejs"

// C:\Users\Administrator\Desktop\myserver\dist\template.html
// 'C:\Users\Administrator\Desktop\myserver\template.html'
let template = fs.readFileSync(path.resolve(__dirname,"../template.html"),"utf8")
// console.log(template)
class Server{
    constructor(config){
        this.port = config.port
        // 将template属性放到实例上，可以保证属性可以通过this来获取，不被参数覆盖掉
        this.template = template;
    }
    async handleRequest(req,res){
        let {pathname} = url.parse(req.url,true)
        let filePath = path.join(__dirname,pathname)
        try{
            let statObj = await stat(filePath)
            if(statObj.isDirectory()){
                // 如果是目录，需要把目录下面的文件读出来
                let dirs = await readdir(filePath)
                // console.log(dirs)  // [ 'a.txt' ]
                // 返回一个网页
                let templateStr = ejs.render(this.template,{dirs})
                res.end(templateStr)
            }else{
                // 如果是文件，把文件的内容返回
                this.sendFile(filePath,req,res,statObj)
            }
        }catch(e){
            this.sendError(e,req,res)
        }
    }
    sendFile(filePath,req,res,statObj){
        // 在响应数据之前，设置一个头 
        res.setHeader("Content-Type",mime.getType(filePath)+"; charset=utf8")
        // 流  node中非常重要的东西 
        fs.createReadStream(filePath).pipe(res)
        
    }
    sendError(e,req,res){
        res.statusCode = 404;
        res.end("Not Found~~~")
    }
    start(){
        // 127.0.0.1 
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(this.port,()=>{
            console.log(`${chalk.yellow('Starting up http-server, serving ')} ${chalk.blue('./')}
${chalk.yellow(' Available on:')}
${chalk.green('http://127.0.0.1:')} ${chalk.green(this.port)}
Hit CTRL-C to stop the server
            `)
        })
    }
}

export default Server