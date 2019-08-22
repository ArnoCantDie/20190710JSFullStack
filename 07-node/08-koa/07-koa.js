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
})

// [ [Function 1,2], [Function 3,4], [Function 5,6] ]
function compose(middlewares){
    return middlewares.reduce(function(a,b){
        // console.log(b)
        // b()
        // a()  1,2
        return function(arg){
            // console.log("...")
            // a() // 1,2
            // return a(b)
            return a(function(){
                return b(arg)
            })
        }
        // return function(arg){
        //     return a(function(){
        //         return b(arg)
        //     })
        // }
    })

    // return middlewares.reduce((a,b)=>(arg)=>a(()=>b(arg)))
    // return middlewares.reduce((a,b)=>(arg)=>a(()=>b(arg)))
}
let fn = compose(app.middlewares);
fn(()=>{})

// let nums = [1,2,3]
// let r = nums.reduce(function(a,b){
//     console.log(b)
// })
// console.log(r)