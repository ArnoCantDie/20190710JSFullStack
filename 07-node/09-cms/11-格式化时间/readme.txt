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

-------------------------------------------
回顾：
    node:是js的运行平台  服务器端 
    模块化：任何一个文件都是模块，导出一个模块，导入一个模块
    模块：内置，第三方，自定义
    内置：http   path   url   querystring   fs   events....
    第三方：body-parser  koa-session  koa-static ...  

    express : 
    koa : 一切都是中间件  .... 
    egg : 企业级  MVC

    MonogoDB : 数据库   集合（users）   文档{name:"xx",age"xx"}
               可视化工具

    cms ：服务端渲染  通过模板引擎  渲染出模板  内容管理系统   
          php   jsp   asp    老一代的技术  
          前端只需要写页面  Html  css   js   jq    bootstrap

    dj ： node  可以快速开接口  前端直接通过ajax，去请求api接口，得到数据，
          直接把数据渲染到页面上。
          java  给后台管理系统 和 vue前端提供接口
          前后端分离开发   后台管理   vue前端
          前端需要写页面（vue，react）  ajax去拿数据  渲染数据 
          组件化   模块化   工程化   全栈化

验证码：svg-captcha









