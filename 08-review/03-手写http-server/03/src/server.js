import http from "http"
import fs from "fs" 
import path from "path"
import url from "url"
let {readFile,writeFile,readdir,stat} = fs.promises
// 第三方
import mime from "mime"  // content-type:application/json
import chalk from "chalk" 
import ejs from "ejs"

class Server{
    constructor(config){
    //    console.log(config.port)
       this.port = config.port
    }
    async handleRequest(req,res){
        // 输入一个/  pathname是 / 
        let {pathname} = url.parse(req.url,true)
        let filePath = path.join(__dirname,pathname)
        // console.log(filePath)  // C:\Users\Administrator\Desktop\myserver\dist
        try{
            let statObj = await stat(filePath)
            if(statObj.isDirectory()){
                // 
                console.log("是一个目录")
            }else{
                // 
                console.log("是一个文件")
            }
        }catch(e){
            this.sendError(e,req,res)
        }

    }
    sendError(e,req,res){
        console.log(e)
        res.statusCode = 404;
        res.end("Not Found")
    }
    start(){
        // 127.0.0.1 托管是dist文件夹
        let server = http.createServer(this.handleRequest.bind(this))
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