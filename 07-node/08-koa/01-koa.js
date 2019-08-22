const Koa = require("koa")

// 创建koa实例 
let app = new Koa()

// 在koa中全部是中间件  ctx表示上下文  next是中间件必有
// cts中包装了req,res
app.use((ctx,next)=>{
    // send  是express中 在koa中没有
    // ctx.res.send("hello")

    // 在原生中有res上有一个end  ctx.res表示拿原生的res
    // ctx.res.end("hello")  // hello

    // 除了可以拿原生的res,req之外，人家又封装两个东西：request  response
    // ctx.response 表示去拿koa封装的响应对象
    // ctx.response.body = "world" // world

    // 原生的：ctx.req.xxx   ctx.res.xxx
    // koa封装的：ctx.response.xxx  ctx.request.xxx
    // koa建议使用koa封装的

    // console.log(ctx.req.url) // 通过原生的方式获取url
    // console.log(ctx.request.url) // 通过koa封装的request对象来获取url
    // console.log(ctx.request.req.url) // 通过koa封装的request对象得到原生的req对象，再得到url
    // console.log(ctx.url) // 可以直接通过上下文得到url

    // console.log(ctx.request.path) // 通过koa封装的request对象来获取path
    // console.log(ctx.path) // 可以直接通过上下文得到path
    // console.log(ctx.req.path)  // undeind  在原生的Node中，req上面是没有path

    // ctx.response.res.end("<h1>hello</h1>")
    // ctx.response.end("<h1>你好</h1>")  // ctx.response中没有end方法
    // ctx.res.end("hello")
    // ctx.response.body = "你好~"
    // ctx.body = "hello"

    // 总结：ctx.body = xxx  响应内容   ctx.url  ctx.path来获取url path

})

// 监听端口
app.listen(3000)