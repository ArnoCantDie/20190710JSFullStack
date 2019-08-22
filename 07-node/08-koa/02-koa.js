const Koa = require("koa")

let app = new Koa()
// 在koa中没有路由，你要使用路由，使用第三方的Koa中间件。  只有中间件  

// 在koa中没有路由，默认情况它会匹配/
// app.use((ctx,next)=>{
//     ctx.body = "hello"
// })

// 研究一下koa的中间件
// 在koa中，中间件也是从上向下执行的
// app.use((ctx,next)=>{
//     console.log(1)
//     console.log(2)
// })
// app.use((ctx,next)=>{
//     console.log(3)
//     console.log(4)
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })

// 在koa中，在一个中间件中调用next()  表示让下一个中间件执行
// app.use((ctx,next)=>{
//     console.log(1)
//     console.log(2)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(3)
//     console.log(4)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })

// 为什么结果是：1,3,5,6,4,2   koa中间件的原理 和 express中间件的原理不一样
// app.use((ctx,next)=>{
//     console.log(1)
//     next()
//     console.log(2)
// })
// app.use((ctx,next)=>{
//     console.log(3)
//     next()
//     console.log(4)
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })
// 1
// 3
// 5
// 6
// 4
// 2

app.use((ctx,next)=>{
    console.log(1)
    // next() // 表示执行下一个中间件中的函数
    ((ctx,next)=>{
        console.log(3)
        ((ctx,next)=>{
            console.log(5)
            console.log(6)
        })() // IIFE
        console.log(4)
    })()  // IIFE
    console.log(2)
})
// app.use((ctx,next)=>{
//     console.log(3)
//     next()
//     console.log(4)
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })

app.listen(3000)