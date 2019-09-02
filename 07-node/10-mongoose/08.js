let UserModel = require("./model/user")
let NewsModel = require("./model/news")

let user = new UserModel({
    name:"wangcai"
})
let news = new NewsModel({
    title:"hello"
})

user.save(err=>{
    if(err) console.log(err)
    console.log("保存数据成功了")
})
news.save(err=>{
    if(err) console.log(err)
    console.log("保存数据成功了")
})