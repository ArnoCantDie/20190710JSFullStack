const http = require("http")
const url = require("url")
const querystring = require("querystring")
let server = http.createServer((req, res) => {
    let str = "";
    let { pathname } = url.parse(req.url)
    // console.log(pathname)
    if (pathname === "/abc") {
        let arr = [];
        // 在流水过程中，有两个事件，一个叫data，一个叫end
        req.on("data", (chunk) => {
            arr.push(chunk)
        })
        req.on("end", () => {
            // [ <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33> ]
            // console.log(arr)
            // <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
            // str = 
            // console.log(str) // a=1&b=2&c=3
            // console.log(str)  // name=wangcai&age=18
            str = Buffer.concat(arr).toString()
            res.end(str)
        })
        // res.write(str)
       
    }

    // res.end(str)
})
server.listen(3000, () => {
    console.log("服务器已启动....")
})