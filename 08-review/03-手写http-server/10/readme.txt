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

强制缓存：  不走网络   首页是不能设置强制缓存 
    一个网站的首页面是不可能走缓存的。这里说的是强制缓存：
    res.setHeader("Cache-Control","max-age=20")  时间不到，不能访问服务器，直接走缓存

对比缓存， 走网络   
    res.setHeader("Cache-Control","no-cache");// 走网络 有缓存 
    1.html  ----> 如果1.html内容没有改变  就不需要服务器返回数据，直接从缓存中取

    也叫协商缓存： 如果一个文件没有发生改变，走缓存
    res.setHeader("Cache-Control","no-cache");  304  
    1.html   走缓存    如果内容改变了，走网络 



图解http  ---->   图片tcp  


http中的强制缓存与对比（协商）缓存


对比缓存不足之处：
    1，文件的内容没有变化，但是修改的时间变了 
    2，时间上不够非常精确，可能在极短的时间修改内容

摘要算法：
    不可逆 
    长度是固定
    相同的内容的摘要相同，不同内容的摘要不同  MD5

etag : 

// https   http://xxxx     运维

MD5： 
    xxxxxfasfdasdfkljasd;fkj---->xxxx 

HTTP中的头：
    请求头：
        accept-encoding 告诉服务器，我接收的数据支持压缩格式

        if-modified-since： 对比缓存  修改时间 
        if-none-match： 摘要缓存  和Etag配对使用的 

    响应头：
        Content-Type   告诉浏览器  我给你的内容的类型
        Content-Encoding  告诉浏览器  我给你的内容的压缩格式 

        Cache-Control   强缓  告诉浏览器，你多长时间之间，不要来访问我
        Expires   强缓   告诉浏览器，你多长时间之间，不要来访问我

        Last-Modified： 对比缓存 和 if-modified-since 配对使用
        Etag   根据摘要做缓存   和 if-none-match 配对使用

---------------------------- 
在PC端和移动端输入同一个网址https://www.taobao.com/，会出现两套不一样的项目。

头：User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
       









