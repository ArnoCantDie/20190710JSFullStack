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
// function compose(middlewares){
//     return middlewares.reduceRight(function(a,b){
//         return function(){
//             // b(()=>{console.log("...")})  // 最终的[Function 1,2],
//             b(a)
//         }
//     })
// }
function compose(middlewares){
    return middlewares.reduceRight((a,b)=>()=>b(a))
}
let fn = compose(app.middlewares)
fn()
// 1
// 2
// 3
// 4
// 5
// 6

// let nums = [1,2,3]
// let r = nums.reduceRight(function(a,b){
//     return a+b
// })
// console.log(r) // 6

// let nums = [1,2,3]
// let r = nums.reduceRight(function(a,b){
//     // return b // 1  这里返回的是最终的b的值
//     return function(){
//         console.log(b)  // 1  这里返回的是最终的b的值
//     }
//     // console.log(b)  // 2,1 
// })
// r()