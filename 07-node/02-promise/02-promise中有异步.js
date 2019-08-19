// 在执行器内部也是可以写异步代码
// then中的方法什么时候调用，只有当调用resolve，reject才会去执行then中的方法
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeout")
        // resolve("包")
        reject("没钱了...")
    },1000)
})
p.then((data)=>{
    console.log(data)  // 包
},(err)=>{
    console.log(err)  // 没钱了...
})