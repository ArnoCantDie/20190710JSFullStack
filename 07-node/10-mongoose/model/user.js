let mongoose = require("./db")

let UserSchema = mongoose.Schema({
    name:String
})

module.exports = mongoose.model("User",UserSchema,"users")
// let User = mongoose.model("User",UserSchema,"users")
// let user = new User({
//     name:"wangcai"
// })
// user.save(err=>{
//     if(err) console.log(err)
//     console.log("保存数据成功了")
// })