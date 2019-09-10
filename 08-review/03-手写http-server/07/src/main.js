import program from "commander"
import Server from "./server"

program
    .option("-p,--port","set http-server port")
    .parse(process.argv)

let config = {
    port:8080
}
Object.assign(config,program)
let server = new Server(config)
server.start()



