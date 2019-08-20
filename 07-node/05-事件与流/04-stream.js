const fs = require("fs")
const path = require("path")
let rs = fs.createReadStream(path.join(__dirname,"name.txt"),{
    flags:"r", 
    highWaterMark:4, 
    encoding:null,
    autoClose:true,
    start:0,
    end:6
})
let arr = [] 
rs.on("data",function(chunk){
    arr.push(chunk)
    rs.pause() // 暂停data事件
})
// end表示读取完毕后触发
rs.on("end",function(){ 
    console.log(Buffer.concat(arr).toString()) 
})

setTimeout(()=>{
    rs.resume() // 恢复data事件
},5000)


