
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

// let Promise = require("./promise")
// let p = new Promise((resolve, reject) => {
//     resolve()
// })
// let promise2 = p.then(()=>{
    // return 123 
    // return {name:"hello"}
    // return {then:"world"}
    // return new Promise((resolve,reject)=>{reject("没钱")})
//     return new Promise((resolve,reject)=>{
//         return new Promise((resolve,reject)=>{
//             return new Promise((resolve,reject)=>{

//             })
//         })
//     })
// },err=>{
//     console.log(err)
// }).then()

let Promise = require("./promise")
let p = new Promise((resolve, reject) => {
    resolve(100)
})
p.then().then().then().then(data=>console.log(data))