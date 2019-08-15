// process.cwd()   crrrent working directory
// console.log(process.cwd()) // c:\Users\Administrator\Desktop\20190710JSFullStack\07-node

// console.log(process.env)  // 当前进程处于的一个环境

// console.log(1)
// setTimeout(()=>{
//     console.log("setTimeout")
// },0)
// // process.nextTick  微任务
// process.nextTick(function(){
//     console.log("nextTick")
// })
// console.log(2)

// nextTick > then
// process.nextTick(function(){
//     console.log("nextTick")
// })
// Promise.resolve().then(()=>{
//     console.log("then")
// })
