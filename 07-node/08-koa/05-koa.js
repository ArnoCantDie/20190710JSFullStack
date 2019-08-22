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
// console.log(app.middlewares)
// app.middlewares[2]()
function compose(middlewares){
    middlewares.reduceRight(function(a,b){
        // 第1次把[Function 5,6]给了a  把[Function 3,4] 给b
        // 第2次把[Function 1,2]给了b 
        console.log(b) // 
        b(a)
        // [Function]
        // 3
        // 4
        // [Function]
        // 1
        // 2
    })
}
compose(app.middlewares)



// function compose(middlewares){
//     return middlewares.reduceRight(function(a,b){
//         return function(){
//             b(a)
//         }
//     })
// }
//  // [ [Function next], [Function next], [Function] ]
// // 规定返回一个函数
// let fn = compose(app.middlewares)
// fn();

// middlewares数组中有一个方法叫reduceRight
// reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
// var numbers = [65, 44, 12, 4];
// let r = numbers.reduceRight((total, num)=>{
//     return total + num;
// });
// console.log(r) // 125

// var numbers = [65, 44, 12, 4];
// let r = numbers.reduceRight((total, num)=>{
//     return "ok"
// });
// console.log(r)

// app.use((ctx,next)=>{
//     console.log(1)
//     (ctx,next)=>{
//         console.log(3)
//         (ctx,next)=>{
//             console.log(5)
//             console.log(6)
//         }
//         console.log(4)
//     }
//     console.log(2)
// })
// app.use()
// app.use()


// // [ [Function next], [Function next], [Function] ]

// var numbers = [1,2,3];
// let r = numbers.reduceRight((total, num)=>{
//     // 刚开始3给了total  2给了Num
//     console.log(num)
//     // return total + num;
// });