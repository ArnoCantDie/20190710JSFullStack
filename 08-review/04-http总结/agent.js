const http = require("http")

http.createServer((req,res)=>{
    let userAgent = req.headers['user-agent']
    // console.log(userAgent)
    // 如果是手机端，跳到百度 
    if(userAgent.includes("iPhone")){
        res.statusCode = 302;
        res.setHeader("Location","http://www.baidu.com")
        res.end()
    }else{
        res.statusCode = 302;
        res.setHeader("Location","http://www.jd.com")
        res.end()
    }
    // 如果是PC端，跳到JD

}).listen(3000)
// 实现访问127.0.0.1:3000  根据不同的设备显示不同的项目 