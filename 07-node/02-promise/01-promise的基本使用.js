/*
--------------
// ()=>{} 叫执行器，会立即执行
let p = new Promise(()=>{})
// 刚创建的Promise默认处理Pending状态
console.log(p)  // Promise { <pending> }
--------------
// promise本身是同步的
console.log("start")
let p = new Promise(()=>{
    console.log("哈哈")  // 哈哈
})
console.log("end")  // start  哈哈   end
--------------
// promise执行器中需要传递两个参数resolve   reject
// 刚创建的Promise默认处理Pending状态
// resolve  pending---->成功状    
// reject  pending---->失败状    
let p = new Promise((resolve,reject)=>{
    resolve("买一个包...")  // 现在promise就处理成功态
})
console.log(p)  // Promise { '买一个包...' }
--------------
// 在promise上面有一个then方法
let p = new Promise((resolve,reject)=>{
    // resolve("买一个包...")  // 成功了....
    reject("没钱了...")  // 成功了....
})
// 在then方法中，有两个参数
// 第一个参数表示从等待状到成功态，会调用第1上参数
// 第一个参数表示从等待状到失败态，会调用第2上参数
p.then(()=>{
    console.log("成功了....")
},()=>{
    console.log("失败了...")
})
--------------
// 一个promise的状态只能从等待到成功，或从等待到失败
let p = new Promise((resolve,reject)=>{
    resolve("买一个包...")  // 成功了....
    reject("没钱了...")  // 失败了....
})
p.then(()=>{
    console.log("成功了....")
},()=>{
    console.log("失败了...")
})
--------------
// 成功肯定有一个成功的结果   失败肯定有一个失败的原因
// 如何得到结果  如何时得到失败原因
let p = new Promise((resolve,reject)=>{
    // 调用reolve时，可以把成功的结果传递下去
    // resolve("买一个包...")  // 买一个包...
    // 调用reject时，可以把失败的原因传递下去
    reject("没钱了...")  // 失败了....
})
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
--------------
let p = new Promise((resolve,reject)=>{
    // throw 一个错误对象  也是失败的
    throw new Error("没钱了...")
})
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
--------------
--------------
--------------
--------------
--------------
--------------
--------------
--------------

*/
let p = new Promise((resolve,reject)=>{
    // throw 一个错误对象  也是失败的
    throw new Error("没钱了...")
})
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})