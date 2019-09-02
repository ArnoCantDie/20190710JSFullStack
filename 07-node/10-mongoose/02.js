const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
let UserSchema = mongoose.Schema({
    name:String,
    age:Number
})
// model 中的第三个参数，指定集合的名字
let uModel = mongoose.model("User",UserSchema,"abc")
let uObj = new uModel({
    name:"xiaoqiang",
    age:10
})
uObj.save(function(err){

})