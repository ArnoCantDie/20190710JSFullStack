import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
let {stat} = fs.promises

import mime from "mime"
import chalk from "chalk"
import ejs from "ejs"
class Server{
    constructor(config){
        this.port = config.port
    }
    async handleRequest(req,res){
        let {pathname} = url.parse(req.url,true)
        let filePath = path.join(__dirname,pathname)
        try{
            let statObj = await stat(filePath)
            if(statObj.isDirectory()){
                console.log("目录")
            }else{
                console.log("文件")
            }
        }catch(e){
            this.sendError(e,req,res)
        }
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