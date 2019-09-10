import http from "http"
import fs from "fs"
import path from "path"
import url from "url"
import zlib, { Z_BEST_COMPRESSION } from "zlib"
let { readdir, stat } = fs.promises

import mime from "mime"
import chalk from "chalk"
import ejs from "ejs"

// C:\Users\Administrator\Desktop\myserver\dist\template.html
// 'C:\Users\Administrator\Desktop\myserver\template.html'
let template = fs.readFileSync(path.resolve(__dirname, "../template.html"), "utf8")
// console.log(template)
class Server {
    constructor(config) {
        this.port = config.port
        // 将template属性放到实例上，可以保证属性可以通过this来获取，不被参数覆盖掉
        this.template = template;
    }
    async handleRequest(req, res) {
        let { pathname } = url.parse(req.url, true)
        // pathname有可能是中文
        // 编码是浏览器自动编码，解码需要手动解
        pathname = decodeURIComponent(pathname)

        // 得到一个文件的路径
        // let filePath = path.join(__dirname,pathname) // 
        // console.log(filePath)   // C:\Users\Administrator\Desktop\myserver\dist
        // console.log(process.cwd()) // 获取当前的工作目录  // C:\Users\Administrator\Desktop\myserver
        let filePath = path.join(process.cwd(), pathname)
        try {
            let statObj = await stat(filePath)
            if (statObj.isDirectory()) {
                // 如果是目录，需要把目录下面的文件读出来
                let dirs = await readdir(filePath)
                // console.log(dirs)  // [ 'a.txt' ]
                // 返回一个网页
                console.log(pathname)
                // /
                // /dist/
                let templateStr = ejs.render(this.template, { dirs, path: pathname === "/" ? "" : pathname })
                res.setHeader("Content-Type", "text/html;charset=utf-8")
                res.end(templateStr)
            } else {
                // 如果是文件，把文件的内容返回
                this.sendFile(filePath, req, res, statObj)
            }
        } catch (e) {
            this.sendError(e, req, res)
        }
    }
    gzip(filePath, req, res, statObj) {
        let encoding = req.headers["accept-encoding"]
        // console.log(encoding)  // gzip, deflate
        if (encoding) {
            if (encoding.match(/gzip/)) {
                res.setHeader("Content-Encoding","gzip")
                return zlib.createGzip()
            } else if (encoding.match(/deflate/)) {
                res.setHeader("Content-Encoding","deflate")
                return zlib.createDeflate()
            }
            return false
        }
        return false
        // console.log(req.headers)
    }
    sendFile(filePath, req, res, statObj) {
        // 设置响应头  10秒之内不要再访问
        // res.setHeader("Cache-Control","max-age=20")
        // res.setHeader("Expires",new Date(Date.now()+1000*20).toGMTString())

        // res.setHeader("Cache-Control","no-cache"); // 还请求服务器  但是有缓存
        // res.setHeader("Cache-Control","no-store"); // 还请求服务器  不缓存

        // 一直从缓存中拿数据
        res.setHeader("Cache-Control","max-age=20000000000000000000000000000000")

        // 在响应数据之前，把数据压缩一把 
        let flag = this.gzip(filePath, req, res, statObj)
        // 在响应数据之前，设置一个头 
        res.setHeader("Content-Type", mime.getType(filePath) + "; charset=utf8")
        // 流  node中非常重要的东西 
        if(!flag){
            // 客户端不支持压缩 或者 客户端支持的压缩格式在服务器端处理不了
            fs.createReadStream(filePath).pipe(res)
        }else{
            fs.createReadStream(filePath).pipe(flag).pipe(res)
        }
        

    }
    sendError(e, req, res) {
        res.statusCode = 404;
        res.end("Not Found~~~")
    }
    start() {
        // 127.0.0.1 
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(this.port, () => {
            console.log(`${chalk.yellow('Starting up http-server, serving ')} ${chalk.blue('./')}
${chalk.yellow(' Available on:')}
${chalk.green('http://127.0.0.1:')} ${chalk.green(this.port)}
Hit CTRL-C to stop the server
            `)
        })
    }
}

export default Server