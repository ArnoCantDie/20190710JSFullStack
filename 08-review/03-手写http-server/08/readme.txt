1，cors  
2，上线流程 
3，http 
    头  
    综合案例  http-server   npm i http-server -g 

在某个文件夹下面   http-server  托管某个文件夹  

如果一个包全局安装了，就可以执行这个包中命令。
如果自己写了一个脚本，也想让它在任何目录下面的执行，需要通过npm link连接到全局环境下

commander

es6   import 
node  require   node默认情况下是不能识别import

babel  可以把es6中的高级请求转成es5。
@babel/cli  解析core
@babel/core   
@babel/preset-env 将es6--->es5

-----------------------
node应用：
    1，写后端 api ssr 
    2，作为前端的工具 npm 
    3，写工具  http-server vue-cli  react-cli  express-cli  loader  xxxx

http-server :
    1，脚手架，工具，都是可以使用node实现的
    2，里面应用到两个比较重要的头  缓存  压缩   项目优化
    3，可以把我们写的包，发布到Npm，其人都可以npm i xxx 去使用你写好的工具
    4，使用babel把es6--->es5

----------------------  自己写一个类似于http-server这样一个工具

node默认情况下，不支持import写法，可以使用babel把import写法转成es5的写法

// http优化策略： 压缩  缓存 
客户端要支持压缩：Accept-Encodeing : gzip  deflate  br  
服务器就可以把内容压缩后，返回给客户端  gzip
压缩的目的：变小

在响应一个文件时，把一个文件压缩，压缩完后返回给浏览器，我们不需要解压，浏览器会自动解压

一个文件到底压不压缩，看请求头中有没有 Accept-Encodeing


如果服务器返回给浏览器一个文件，如果浏览器认识这个文件，就解析这个文件，如果不认识，就以下载的方式进行处理

一个网站的首页面是不可能走缓存的。








