// https://www.jianshu.com/p/0790efc02c22
// koa-compose

// 只有两个地方可以查看一个第三方模块怎么用： npm   github
const Koa = require("koa")
const compose = require("koa-compose")
const app = new Koa()

let f1 = async (ctx,next)=>{
    console.log("f1")
    await next()
}
let f2 = async (ctx,next)=>{
    console.log("f2")
    await next()
}
let f3 = async (ctx,next)=>{
    console.log("f3")
    await next()
}
let all = compose([f1,f2,f3])
app.use(all)

app.listen(3030)