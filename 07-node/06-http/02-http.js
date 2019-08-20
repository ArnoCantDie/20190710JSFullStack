let http = require("http")
let url = require("url")
let querystring = require("querystring")
let server = http.createServer(function(req,res){
    // let urlObj = url.parse(req.url)
    // console.log(urlObj)

    // let {pathname,query} = url.parse(req.url)
    // console.log(pathname)  //  /shop
    // console.log(query)  // name=%22zhangsan%22

    let {pathname,query} = url.parse(req.url)
    let queryObj = querystring.parse(query)
    console.log(queryObj)  //  { name: '"zhangsan"', age: '100' }

})
let port = 3000
server.listen(port,()=>{
    console.log(`服务器运行在${port}上面...`)
})

// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: '?name=%22zhangsan%22',
//     query: 'name=%22zhangsan%22',
//     pathname: '/shop',
//     path: '/shop?name=%22zhangsan%22',
//     href: '/shop?name=%22zhangsan%22' }


