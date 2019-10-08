home   login  profile

跨域：
    ajax(axios)+浏览器
    解决：代理服务器   vue.config.js
          后端配置 cors   headers 
          浏览器插件  

vue中模块化是ES6模块化   
node中Commontjs模块化   通过bobel

总结：
    1，cookie   
         思想   
         通过几个字段来设置cookie 
         封装了setCookie  和  getCookie 
         案例  
         给coolie签名处理  

    2，session
         是基于cookie
         存储在服务的内存中，也可以持久化（入库）

    3，localstorage   sessionstroage   cookie   session ?

    4，jwt  前后端分离开发 
         axios
            封装自己的axios 
                axios.create()  
                请求拦截和响应拦截
                请求拦截：
                    打开动画（第1次请求）
                    加了一个头：Authorization
                响应拦截：  
                    red.data
                    关闭动画 

            api文件夹：
                用户管理接口：user.js  
                新闻管理接口：news.js














