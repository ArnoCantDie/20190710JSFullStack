let zlib = require("zlib")
let fs = require("fs")

// 如果数据中重复性东西非常多，非常适合压缩
// 音乐  电影数据  不适合使用gzip来压缩
// zlib.gzip(fs.readFileSync("./a.txt"),function(err,data){
//     fs.writeFileSync("abc.gz",data)
// })

fs.createReadStream("./a.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("b.txt.gz"))

