let http = require("http")
let fs = require("fs")
let path = require("path")
let url = require("url")
// 服务器返回给客户端有数据分两类：json  静态资源数据（html,css,js,img...）
let server = http.createServer(function(req,res){
    // url.parse(req.url,true)   true表示直接把查询字符串变成了对象
    let {pathname} = url.parse(req.url,true)
    // console.log(pathname)
    let absPath = path.join(__dirname,pathname)
    // console.log(absPath) // C:\Users\Administrator\Desktop\20190710JSFullStack\07-node\index.html
    
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode = 404
            res.end("not found")
            return;
        }
        console.log(statObj)
    })
})

server.listen(3000)

// Stats {
//     dev: 1280251583,
//     mode: 33206,  // 33206表示文件
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 5066549581083244,
//     size: 407,
//     blocks: undefined,
//     atimeMs: 1566289062797.8657,
//     mtimeMs: 1566289052783.242,
//     ctimeMs: 1566289052783.242,
//     birthtimeMs: 1566288943843.488,
//     atime: 2019-08-20T08:17:42.798Z,
//     mtime: 2019-08-20T08:17:32.783Z,
//     ctime: 2019-08-20T08:17:32.783Z,
//     birthtime: 2019-08-20T08:15:43.843Z }

// { [Error: ENOENT: no such file or directory, stat 'C:\Users\Administrator\Desktop\20190710JSFullStack\07-node\index666.html']
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'stat',
//   path:
//    'C:\\Users\\Administrator\\Desktop\\20190710JSFullStack\\07-node\\index666.html' }