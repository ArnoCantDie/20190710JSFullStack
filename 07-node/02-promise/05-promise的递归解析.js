/*
-----------------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve("6666")
                },1000)
            }))
        },1000)
    })
})
// data是promise 还是666
p1.then(data=>{
    console.log(data)  
},err=>{
    console.log(err) 
})
-----------------------------
-----------------------------
-----------------------------
-----------------------------
-----------------------------
*/
let p = new Promise((resolve, reject) => {
    resolve("hello")
})
let p1 = p.then(data => {
    return new Promise((resolve, reject) => {
        // 如果在resolve或reject中又是一个promise，会递归解析
        resolve(new Promise((resolve, reject) => {
            resolve(new Promise((resolve, reject) => {
                resolve(new Promise((resolve, reject) => {
                    resolve(new Promise((resolve, reject) => {
                        resolve(new Promise((resolve, reject) => {
                            resolve("6666")
                        }))
                    }))
                }))
            }))
        }))
    })
})
// data是promise 还是666
p1.then(data => {
    console.log(data)
}, err => {
    console.log(err)
})