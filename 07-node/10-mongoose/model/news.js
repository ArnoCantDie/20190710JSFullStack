let mongoose = require("./db")

let NewsSchema = mongoose.Schema({
    title:String
})

module.exports = mongoose.model("News",NewsSchema,"news")
// let News = mongoose.model("News",NewsSchema,"news")
// let news = new News({
//     title:"hello"
// })
// news.save(err=>{
//     if(err) console.log(err)
//     console.log("保存数据成功了")
// })