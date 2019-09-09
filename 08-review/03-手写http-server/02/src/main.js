import program  from "commander"
import Server from "./server"

program
  .option('-p, --port<val>', 'set http-server port')
  .parse(process.argv)

let config = {
    port:8080
}

Object.assign(config,program)
console.log(config.port)

// 开启一个服务 
let server = new Server(config)
server.start()  // 启动服务



