const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myapp")

let NewsSchema = mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    content:String,
    status:Number
})
let News = mongoose.model("News",NewsSchema,'news')

let news = new News({
    title:"新闻的标题",
    author:"wangcai",
    content:"新闻的内容",
    status:1
})

// 每save一次，就往数据库保存一条数据，类似insert
// news.save(function(err){
//     if(err) console.log(err) 
//     console.log("保存数据成功了...")
// })

// 更新数据 
News.updateOne({"_id":"5d6c81351c9a341f18623d0c"},{"title":"新闻的标题666"},function(err,data){
    if(err) console.log(err) 
    console.log(data)  // { n: 1, nModified: 1, ok: 1 }
})
