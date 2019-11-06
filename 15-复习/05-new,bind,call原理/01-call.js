// call 
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
// fun.call(thisArg, arg1, arg2, ...)

// 可以改变当前函数的this指向   还会让call前面的函数执行

// ----------------- call可以借用别的方法
// function f(){
//     console.log("f....")
// }
// let obj = {}
// // 让obj调用f方法
// f.call(obj)  // f....

// --------------- call可以改变this指向
function f(){
    console.log(this) // window
}
// f()
let obj = {}
// // 让obj调用f方法
f.call(obj)  // {}





















