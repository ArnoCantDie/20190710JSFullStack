/*
---------------------------
// 如果.then中有第2个函数，在这个.then后面又有catch，如果到失败态，它会走then的第2个函数

let p = new Promise((resolve,reject)=>{
    reject("不OK")
})
// catch就.then的语法糖
p.then(data=>{

},err=>{
    console.log("1",err)
}).catch(err=>{
    console.log("2",err)
})
---------------------------
// 如果.then中没有第2个函数，在这个.then后面又有catch，如果到失败态，它会走catch
let p = new Promise((resolve,reject)=>{
    reject("不OK")
})
// catch就.then的语法糖
p.then(data=>{

}).catch(err=>{
    console.log("2",err)
})

---------------------------
// 在then第二个函数中，return err 这个err它是return到了下一个.then的第一个函数中
let p = new Promise((resolve,reject)=>{
    reject("不OK")
})
// catch就.then的语法糖
p.then(data=>{

},err=>{
    console.log("---------")
    // 在这里它并没有reutrn到err中，它reutrn到第一个参数中
    return err
}).then(data=>{
    console.log("data----",data)
},err=>{
    console.log("err----",err)
})
---------------------------
let p = new Promise((resolve,reject)=>{
    resolve("OK")
})
// catch就.then的语法糖
// 最终，一个promise中，一般在then中只有一个函数，在then后面有一个catch，一般使用then来获取data，在catch中获取err
p.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
---------------------------
*/


