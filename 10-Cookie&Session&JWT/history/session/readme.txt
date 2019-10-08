cookie session  会话控制  

HTTP无状态的  并不知道是谁来请求我了  
cookie就是用来存储标识，标识是存储在浏览器端，每一次请求浏览器都会带上cookie
cookie是服务器给浏览器种植的
    特点：
        1，不安全
        2，一般不会把敏感信息存储在cookie中


    www.baidu.com   www 顶级
    news.baidu.com   news和music是配置的二级域名   wangcai.cn  abc.wangcai.cn   jd.wangcai.cn 
    music.baidu.com 

    domain 限制某个域可以访问，域名，没有设置domain，默认就是当前的域
    path 表示在哪个路径下可以访问cookie  /   一般都是/    /a   如果没有设置，默认就是/，一般情况下，不会设置，都是/
    size cookie大小
    expires 过期时间   max-age=10  表示10秒之后cookie自动消失 如果没有设置，默认是Session，表示当前会话结束后（关闭了浏览器，会话才会结束），消失
    httpOnly 表示只能通过服务器来操作cookie 也不安全  httpOnly=true表示只能通过服务来操作cookie

    jd.com/shouji?name="wangcai"
    jd.com/diannao?name="wangcai"

localStorage   --->   setItem("name","wangcai")

hosts  


www.baidu.com ---> DNS(本地的，服务器)


cookie:
    http协议本身是无状态，并不会记录，哪个客户端访问服务器 
    会话（打开浏览器，访问一个网站，关闭浏览器）控制：cookie  session   
    利用会话控制可以在多个请求之间建立联系
    cookie保存每次请求中的标志，把标志保存在浏览器端，是服务器种植给浏览器，在种植时，可能通过domain,path,exprix,size,httpOnly来设置cookie
    一旦，服务器给浏览器种植了一个cookie，浏览器再去请求服务器时，会自动带上服务器种植的cookie
    在服务器，就可以得到cookie，就得到了标志 

    setCookie  
    getCookie  

    写了一个第几次访问了XXX网站。  ---->  cookie   

    浏览器可以修改cookie   ----->  签名   1.fasdfldkfaer134235134

Session:
    session是基于cookie   第1次请求时，服务器会把一个session_id以cookie形式种植给浏览器

localStorage, sessionStorage, cookie, session有什么区别？
    localStorage 不能跨域存取   最大存5M   超过5M的数据就会丢失   在发送请求时，不会带上localStorage
    sessionStorage 当浏览器关闭时，里面的数据就丢失
    cookie 服务器种植的，每次请求都会带上cookie，安全，解决无状态问题，最多4K，浪费流量
    session 基于cookie  保存在服务器（内存，入库） 相对安全

    前后端分离（前端调后端api接口）开发的：cookie，主流：session 或 JWT


JWT: json web token
    token 















