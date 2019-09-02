db.js  之前是把操作数据库的操作封装到了一个js文件中 db.find("xx",{})
mongoose  依赖   方便操作数据库
    可以达到像操作对象一样，去操作数据库。

安装：npm i mongoose 

mongoose 安装完后，不需要再引入mongodb了

步骤：
    1，安装并引入  const mongoose = require("mongoose")
    2，建立连接  mongoose.connect("mongodb://127.0.0.1/myapp")
        如果在数据库没有myapp这个数据库，连接时，并不会自动创建这个数据库 
    3，定义一个Schema，它需要和你最终在数据库中创建的字段保持一样
        Schema创建完后，也不会在数据库自动创建这个数据库
    4，根据Schema创建model 
    5，实例化model
    6，通过save保存数据到数据库













