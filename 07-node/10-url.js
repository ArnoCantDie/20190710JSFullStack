const http = require("http")
const url = require("url")
let server = http.createServer((req,res)=>{
    // req就是IncomingMessage
    // 在浏览器的地址栏中输入什么样的路么，可能通过req.url得到
    // 得到的req.url是一个字符串
    // console.log(req.url) //  / 

    // 可以把上面的req.url字符串转成对象 利用url模块
    // localhost:3000/shouji?name=xiaoming
    let {pathname,query} = url.parse(req.url)
    // /shouji name=xiaoming
    console.log(pathname,query)
    // /shouji undefined  url模块只能解析出路径名和查询字符串
    // name=xiaoming 解析出来的查询字符串不是一个对象
    console.log(pathname,query.name)
    res.write("hello") 
    res.end() 
})
server.listen(3000,()=>{
    console.log("服务器已启动....")
})

// Url {
//     protocol: null,  // 协议
//     slashes: null,  
//     auth: null,   // 认证
//     host: null,   // 主机
//     port: null,    // 端口
//     hostname: null,   // 主机名
//     hash: null,  // hash
//     search: '?name=%22wangc%22',  // 查询字符串
//     query: 'name=%22wangc%22',   // 查询字符串
//     pathname: '/abc',   // 路径名
//     path: '/abc?name=%22wangc%22',   // 路径
//     href: '/abc?name=%22wangc%22' }