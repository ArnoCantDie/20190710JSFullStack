let app = {
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
}

app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
    next()
})
app.use((next)=>{
    console.log(5)
    console.log(6)
    next()
})
// koa中间件的原理
function dispatch(index){
    if(app.middlewares.length === index) return;
    let route = app.middlewares[index]
    route(()=>{dispatch(index+1)})
}
 // [ [Function], [Function], [Function] ]
dispatch(0)
