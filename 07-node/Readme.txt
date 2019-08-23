mongodb  数据库   软件   数据库服务  对外提供数据服务的
node  创建一台web服务器 对我提供网页服务的

如果你在你电脑上装了mongodb，那么你的电脑就是一台数据库服务器


数据库：
    关系型   表  mysql  oricle db2 sqlserver ...
    非关系型  不是表  js对象   key:value  mongodb  redis  { }

数据库安装：
    安装到指定的目录：D:/mongo   保证在这个目录下面有一个data 

开启服务：
    在桌面上，新建startdb.bat，在这个文件中写：

在使用mongodb之前，必须有了解如下三个概念：
    database，数据库 [{},{},{}],[{},{},{}],[{},{},{}]
    dollection，集合  多个js对象 [{},{},{}]
    document，文档  js对象 {}