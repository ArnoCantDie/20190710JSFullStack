// 如果中间件中有异步
// 有可能你下一个中间件里面有异步任务
// const Koa = require("koa")
// const app = new Koa()
// app.use(async (ctx,next)=>{
//     console.log(1)
//     // await 后面是异步
//     await next()
//     console.log(2)
// })
// app.use((ctx,next)=>{
//     setTimeout(function(){
//         console.log(3)
//     },3000)
// })
// app.listen(3030)

// const Koa = require("koa")
// const app = new Koa()
// app.use((ctx,next)=>{
//     // 调用一个中间件，返回promise
//     let a = next()  // a是一个promise
//     console.log(a) // Promise { 'hello' }
// })
// app.use((ctx,next)=>{
//     return "hello"
// })
// app.listen(3030)

// const Koa = require("koa")
// const app = new Koa()
// app.use(async (ctx,next)=>{
//     // 调用一个中间件，返回promise
//     let a = await next()  // a是一个promise
//     console.log(a) // Promise { 'hello' }      'hello'
// })
// app.use((ctx,next)=>{
//     return "hello"
// })
// app.listen(3030)

const Koa = require("koa")
const app = new Koa()
app.use(async (ctx,next)=>{
    // 写异步就要像写同步代码一样
    // 在一个中间件中，利用async+await --->  仅仅是把Pomise状态 转化 普通值
    let r = await next()  
    console.log(r)  // Promise { 0 }  ||   0
})
app.use((ctx,next)=>{
    let a = 0; 
    setTimeout(function(){
        a = 666;
    })
    return a
})
app.listen(3030)
