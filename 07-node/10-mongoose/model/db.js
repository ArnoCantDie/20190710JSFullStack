const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp",{useNewUrlParser:true},err=>{
    if(err) return 
    console.log("连接数据库成功了")
})
module.exports = mongoose

