// http 超文本传输协议  规则 
// 人与人之间交流：汉语  人与计算交流：计算机语言  计算机与计算机：协议
// 客户端与服务器之间传输数据：json    html,css,js,img,mp4...
// 一般情况下，都是客户端去访问服务器  服务器也可以主动给客户端发信息
// 客户端：浏览器  js代码
const http = require("http")
// req表示请求对象  res表示响应对象
let server = http.createServer((req,res)=>{
    res.write("hello") // 响应数据
    res.end() // 结束响应
})
server.listen(3000,()=>{
    console.log("服务器已启动....")
})