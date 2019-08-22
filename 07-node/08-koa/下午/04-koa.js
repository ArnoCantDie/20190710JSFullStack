// https://www.jianshu.com/p/0790efc02c22
// koa-bodyparser

// 只有两个地方可以查看一个第三方模块怎么用： npm   github
const Koa = require("koa")
var bodyParser = require('koa-bodyparser');
var app = new Koa();
app.use(bodyParser());  // 使用中间件

// app.use表示使用中间件  中间件批use里面的函数
// ()=>{}  当访问 / 时，调用它
app.use(async (ctx,next)=>{
    // console.log(ctx.request.body)  // { name: 'wangcai', age: '100' }
    ctx.body = ctx.request.body
    await next()
})


app.listen(3030)