// express中间件原理    koa中间件原理    redux中间件原理

let app = {
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
}

app.use((next)=>{
    console.log(1)
    console.log(2)
})
app.use((next)=>{
    console.log(3)
    console.log(4)
})
app.use((next)=>{
    console.log(5)
    console.log(6)
})
// 执行容器中的哪一个方法
function dispatch(index){
    let route = app.middlewares[index]
    route()
}
// 执行容器中的第1个方法
dispatch(0)
// console.log(app.middlewares)  // [ [Function], [Function], [Function] ]
