const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp",{useNewUrlParser:true},err=>{
    if(err) return 
    console.log("连接数据库成功了")
})

let NewsSchema = mongoose.Schema({
    title:String,
    status:{
        type:Number,
        default:1  // 默认参数
    }
})
let News = mongoose.model("News",NewsSchema,'news')

let news = new News({
    title:"新闻的标题"
})
news.save(err=>{
    if(err) console.log(err)
    console.log("保存数据成功了")
})