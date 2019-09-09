复习  vue   node  面试题  应试教育  

跨域：
    浏览器同源策略  浏览器+ajax  axios
    协议不同，IP不同，端口不同
    jsonp  原理  script  src 
    cors   cros  后端配置允许哪个人可以访问服务器
    代理  devServer  在前端开一个代理服务器   代理服务器和前端处于同一个域下   代理服务器去请求别的服务器
    iframe  浮动框架  iframe src="..."
    websocket  协议  xxx 
    nginx 配置 
    window.name
    ....

ajax的发展流程：
    传统的ajax 
    jq封装的ajax 
    新时代的ajax 
        ios xxx 
        android  xxx
        h5  axios  底层还是ajax
            fetch  底层已不是ajax 
                jax已死 fetch永生
    反向ajax 
        websocket

向服务器传送数据有几种方法：
    1，url  ? name=wangcai   
    2，form  
    3，header

请求方式：
    简单请求：
        get 
        post 
    复杂请求：
        options   试探请求  在真正发送请求时，先试探一下，是否OK
        PUT
        DELETE

=========================
cors  
上线  
    开发时使用win/mac   线上是linux   ---> 出现问题
    图片----> 服务器的某个目录下面（jsp,php）   图片服务器    七牛

面试：
    前端 
        html,css,js,vue技术栈
    后端   
        node
            express 
            koa
    网络
        http  
        tcp 
    数据结构与算法 

------------------------
http 
    网络7层模型：xx  xx  xx  xx xx 
        应用层：http 
        传输层：tcp  udp  
    超文本传输协议 
    考点：三次握手，四次挥手 

http相对于tcp来说，就是多了一些头，学习http就是学习头。

说一下，从输入一个地址到看到一张网页，经历了什么？

管线化：同时可以发送N个请求

http分请求与响应：
    请求：  
        请求行， GET / HTTP/1.1
        请求头， 非常多
        请求正文，是扔给服务器的数据 
    响应：
        响应行， HTTP/1.1 200 OK
        响应头，非常多
        响应正文，服务器扔给客户端数据

http状态码：
    1xx   101  双向通信  websocket
    2xx   200  成功     204  没有响应体    206 断点续传
    3xx   301  永久重定向  302 临时重定向   304 缓存
    4xx   401  没有权限   403 登录了没有权限   404 找不到对应的资源   405请求方法不存在，不支持
    5xx   502  负载均衡

请求方式：  RestfulApi
    get  获取资源 
    post  新增资源 
    put  上传文件 
    delete 删除资源
    options 只会在跨域的时间出现，或在复杂请求时出现

通过Http向服务器传输数据：
    请求行   url 
    请求头   自定义header
    请求正文  

    响应行   状态码
    响应头   设置cookie  
    响应体   返回给浏览器数据 

手写http-server

















