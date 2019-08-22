// const Koa = require("koa")
// const app = new Koa()
// // 中间件本质就是一个函数 ctx  next
// // next() 相当执行了下一个中间件
// app.use((ctx,next)=>{
//     console.log(1)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(2)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(3)
//     next()
// })
// app.listen(3030)


const Koa = require("koa")
const app = new Koa()
// 中间件本质就是一个函数 ctx  next
// next() 相当执行了下一个中间件
// 结果是1 2 3  就破坏了洋葱模型
app.use((ctx,next)=>{
    console.log(1)
    next()
    console.log(2)
})
app.use((ctx,next)=>{
    setTimeout(function(){
        console.log(3)
    })
})
app.listen(3030)