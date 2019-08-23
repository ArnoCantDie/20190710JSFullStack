创建项目的步骤：
    第1步：npm i koa-generator -g 
    第2步：koa2 mycms 
    第3步：cd mycms 
    第4步：npm i 
    第5步：npm start 

一个项目包含：
    前台
    后台
    api接口

鉴权：
    cookie  是用来在浏览器存储数据，当访问一个服务器时，服务器会给浏览器返回一堆信息，
           这一堆信息存储在cookie中，服务器给浏览器种植cookie。
           再去请求服务器，会带上cookie。
           不足：每次请求都会带着一堆cookie，不安全

    session  也是存储数据，只是数据存储在服务器，session是基于cookie，cookie里面要保存seession_id
        以后，每次请求都要带着session_id

    jwt   token 













