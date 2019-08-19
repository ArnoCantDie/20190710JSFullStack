// path 内置模块  系统模块  核心模块
// 内置模块，直接require  require("path")
// 第三方模块，直接require  require("element-ui")
// 自定义模块，需要以./打头   require("./myxx")
// let path = require("path")

// basename  extname  dirname  join  resolve
// let path = require("path")
// let r = path.basename("1.js",".js")
// console.log(r)

// let path = require("path")
// let r = path.extname("1.js") // 得到一个文件扩展名
// console.log(r)

// let path = require("path")
// let r = path.dirname("a/b/c/d/e/f") // 得到目录名字
// console.log(r)

// let path = require("path")
// // c:\Users\Administrator\Desktop\20190710JSFullStack\07-node\a\b\c
// let r = path.join(__dirname,"a/b/c")  // 把两个路径拼成一个路径
// console.log(r)

// c:\Users\Administrator\Desktop\20190710JSFullStack\07-node\a\b\c
// let path = require("path")
// let r = path.resolve("a/b/c")  // 把两个路径拼成一个路径
// console.log(r)

// 应用：在服务器端，路径尽量使用绝对路径。使用path模块，目的就是为了得到绝对路径

// 读取一个文件中的内容
let fs = require("fs");
let path = require("path");

let fileName = path.join(__dirname,"out.txt")
// c:\Users\Administrator\Desktop\20190710JSFullStack\07-node\out.txt
// console.log(fileName)

fs.readFile(fileName,(err,data)=>{
    if(err) return
    console.log(data)
})