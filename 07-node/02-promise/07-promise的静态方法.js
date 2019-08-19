// let p = new Promise((resolve,reject)=>{
// })
// p.then()

// 在Pomise类上面，提供了几个静态方法resolve()  reject()
// Promise.resolve("包包").then(data=>{
//     console.log(data)  // 包包
// })

// 上面的写法等价于下面的写法
// let p = new Promise((resolve,reject)=>{
//     resolve("包包")
// })
// p.then(data=>{
//     console.log(data)
// })

// Promise.reject("没钱了...").catch(data=>{
//     console.log(data)  // 没钱了...
// })

// finally  最终  不管转成成功态还是失败态，都会调用finally这个方法
// Promise.resolve("包包").then(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("开心...")
// })

// Promise.reject("没钱").catch(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("不开心...")
// })

// 读取name.txt和age.txt中的内容
// let fs = require("fs").promises;
// // all表示[]中的promise都成功了，才能得到最终的值
// Promise.all([fs.readFile("./name.txt","utf-8"),fs.readFile("./age.txt","utf-8")]).then(data=>{
//     console.log(data) // [ 'age.txt', '666' ]
// })

// let fs = require("fs").promises;
// Promise.race([fs.readFile("./name.txt","utf-8"),fs.readFile("./age.txt","utf-8")]).then(data=>{
//     console.log(data) // age.txt
// })


// 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
let fs = require("fs").promises;
Promise.race([fs.readFile("./name.txt","utf-8"),fs.readFile("./age.txt","utf-8")]).then(data=>{
    console.log(data) // age.txt
})