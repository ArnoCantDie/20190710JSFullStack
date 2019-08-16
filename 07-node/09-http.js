const http = require("http")
// http://  协议   http   https
// localhost域名
// 3000 端口
// /abc 路径名
// name="zhang" 查询字符串
// 路径名 + 查询字符串 = 路径
// #5678 hash
// http://localhost:3000/abc?name="zhang"#5678
let server = http.createServer((req,res)=>{
    res.write("hello") 
    res.end() 
})
server.listen(3000,()=>{
    console.log("服务器已启动....")
})