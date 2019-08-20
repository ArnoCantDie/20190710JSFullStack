// 流 流水 可读流 可写流 
// fs.createReadStream(path[, options])
// fs.createWriteStream(path[, options])
const fs = require("fs")
const path = require("path")
// 可读流 并不会去读取文件
let rs = fs.createReadStream(path.join(__dirname,"name.txt"),{
    flags:"r", // r read 
    highWaterMark:4, // 4*1012  4kb   4kb = 4*1024字节
    encoding:null,
    autoClose:true, // 读取完后，需要关毕
    start:0,
    end:6
})
let arr = [] // 用来装水容器
// 需要两个事件 data  end
rs.on("data",function(chunk){
    // chunk表示每一滴水
    arr.push(chunk)
})
rs.on("end",function(){ // 30--->48--->0  0,1,2,3   4,5
    // console.log(arr)  // [ <Buffer 30 31 32 33>, <Buffer 34 35> ]
    // console.log( Buffer.concat(arr)) // <Buffer 30 31 32 33 34 35 36>
    console.log(Buffer.concat(arr).toString()) // 0123456
})


