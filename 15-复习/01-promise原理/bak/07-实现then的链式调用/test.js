
// let Promise = require("./promise")
// let p = new Promise((resolve, reject) => {
//     resolve()
// })
// let promise2 = p.then(()=>{
//     return promise2;  // 我在等待我自己去洗衣服
// })
// // UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise></Promise>
// promise2.then(null,data=>{
//     console.log(data) //  my Chaining cycle detected for promise #<Promise></Promise>
// })

let Promise = require("./promise")
let p = new Promise((resolve, reject) => {
    resolve()
})
let promise2 = p.then(()=>{
    // return 123 
    // return {name:"hello"}
    // return {then:"world"}
    return new Promise((resolve,reject)=>{reject("没钱")})
},err=>{
    console.log(err)
}).then(data=>{
    console.log("data-->",data) 
},err=>{
    console.log("err-->",err)
})