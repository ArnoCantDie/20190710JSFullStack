const http = require("http")
const url = require("url") // 把路么名和查询字符串找出来
const querystring = require("querystring") // 解析查询字符串
let server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url)
    let r = querystring.parse(query)
    console.log(r)  // { name: 'xiaoming' }
    console.log(r.name)  // xiaoming
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