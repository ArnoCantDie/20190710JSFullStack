const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
let UserSchema = mongoose.Schema({
    name:String,
    age:Number
})
let uModel = mongoose.model("User",UserSchema)
let uObj = new uModel({
    name:"xiaoqiang",
    age:10
})
uObj.save(function(err){
    if(err) console.log(err)
    console.log("OK....")
})
// 查询 根据model来查询数据
uModel.find({},function(err,doc){
    if(err) console.log(err)
    console.log(doc)
})

