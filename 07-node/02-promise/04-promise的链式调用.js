/*
--------------------
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },1000)
})
p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("world")
        },1000)
    })
}).then(data=>{
    console.log(data)  //world
},err=>{

})
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return p1
}).then(data=>{
    console.log(data)
})
// p.then(data=>{
//     return "abc"
// }).then(data=>{

// })
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return p1
})
// UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise>
p1.then(data=>{
    console.log(data)
},err=>{
    // Chaining cycle detected for promise  循环引用   我在等我吃饭
    console.log("-----",err)
})
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return p1
})
// UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise>
p1.then(data=>{
    console.log(data)
},err=>{
    // Chaining cycle detected for promise  循环引用   我在等我吃饭
    console.log("-----",err)
})
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    // return 123  相当于把等待态改变成成功在态
    return 123
})
p1.then(data=>{
    console.log(data)  // 123
},err=>{
    console.log("-----",err)
})
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    //  return new Error("不OK") 把等待态变成失败态
    return new Error("不OK")
})
p1.then(data=>{
    console.log(data) 
},err=>{
    console.log(err)  // Error: 不OK
})
--------------------
let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("不OK")
        },1000)
    })
})
p1.then(data=>{
    console.log(data)  
},err=>{
    console.log(err) 
})
--------------------
--------------------
--------------------
*/

let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("不OK")
        },1000)
    })
})
p1.then(data=>{
    console.log(data)  
},err=>{
    console.log(err) 
})