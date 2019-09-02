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

News.deleteOne({"_id":"5d6c81351c9a341f18623d0c"},(err,data)=>{
    if(err) console.log(err) 
    console.log(data) // { n: 1, ok: 1, deletedCount: 1 }
})

