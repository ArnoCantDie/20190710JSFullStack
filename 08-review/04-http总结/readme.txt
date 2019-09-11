

HTTP中的头：
    请求头：
        accept-encoding 告诉服务器，我接收的数据支持压缩格式

        if-modified-since： 对比缓存  修改时间 
        if-none-match： 摘要缓存  和Etag配对使用的

        user-agent: 不同设备自动带上这个头   判断什么样的设备，重定向到同的项目

    响应头：
        Content-Type   告诉浏览器  我给你的内容的类型
        Content-Encoding  告诉浏览器  我给你的内容的压缩格式 

        Cache-Control   强缓  告诉浏览器，你多长时间之间，不要来访问我
        Expires   强缓   告诉浏览器，你多长时间之间，不要来访问我

        Last-Modified： 对比缓存 和 if-modified-since 配对使用
        Etag   根据摘要做缓存   和 if-none-match 配对使用

        Lotaion  重定向到 某个地方  

代理：反向代理  正向代理  

HTTP需要大家准备的东西：  应试 
    1，网络的模型  
    2，HTTP  TCP  三次握手   四次挥手   
        请求与响应 
    3，HTTP中的常用的头
        .....  
    4，HTTP中的常用的状态码 
    5，HTTP中的请求方法
    6，代理
    7，HTTPS  原理 

vue    mvvm    vuex   vue-router  原理 

       









