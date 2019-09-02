const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/myapp")

let UserSchema = mongoose.Schema({
    username:String,
    age:Number,
    status:Number
})
// model中第一个参数，首字母要大写 
// 创建的model是User，但是在数据库，对应的集合名是users
// 如果没有指定集合名，最终在数据库中会根据model的名字来创建集合名
// 把model的名字全部小写，单数变成复数
let User = mongoose.model("User",UserSchema)

let u = new User({
    username:"wangcai",
    age:100,
    status:1
})

// 当调用save时，才能往数据库中保存数据
u.save(function(err){
    if(err){
        console.log(err)
    }
    console.log("数据保存成功了...")
})