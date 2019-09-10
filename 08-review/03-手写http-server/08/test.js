// console.log("ok") // 日志输出

// 输入一个abc，通过转化流，把abc转化成ABC，输出  压缩就是使用的转换流
const {Transform} = require("stream")

class MyTransform extends Transform{
    _transform(chunk,encoding,callback){
        chunk = chunk.toString().toUpperCase()
        this.push(chunk)
        callback()
    }
}

let myTransform = new MyTransform() // 创建一个转化流

process.stdin.pipe(myTransform).pipe(process.stdout)

// 标准输入
// process.stdin.on("data",function(data){
//     // 标准输出
//     process.stdout.write(data)
// })