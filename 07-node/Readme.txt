node是什么？
    运行ecmascript的一个运行环境。基于v8引擎。并没有dom操作。操作数据库，操作文件...

node的特点？
    1，主线程是单线程  ajax请求  setTimeout()  底层还是多线程。
    2，非阻塞IO模型 （同步异步）(IO密集性型)  同步阻塞   异步非阻塞
    3，创建高性能的web服务器
    4，基于事件驱动
    5，npm(第三方模块)   node    java    jdk  jar

node中的模块：
    内置，核心，系统模块
    第三方模块（包，依赖）
    自定义模块

node安装：
    LTS：10.x  
    Current: 12.x

node11.x版本之后，事件环就慢慢和浏览器的事件环一样了。

JS中有一个全局对象：global
    浏览器：window    var a = 110;   window.a 
    node: global

global:
    exports module  require  __dirname  __filename
    process 进程  表示当前的运行环境  
    Buffer 内存中的数据，都是二进制数据，缓存，虽然buffer中保存地是二进制，但是表现出来的是16进制
    setTimeout  clearTimeout       宏
    setInterval  clearInterval     宏
    setImmediate  clearImmeidata   宏
    console

十六进制转十进制：30 ---> 48 ----> 0   中国人   GBK   GB2312  Unicode  UTF8 





    

        
