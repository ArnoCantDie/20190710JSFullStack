const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")

// 获取管理员列表的api接口  /api/manage/
router.get("/", async (ctx, next) => {
    let result = await DB.find("admin", {})
    // 处理result，返回移动端需要的数据
    // console.log(result)
    ctx.body = result
})

// 添加管理员的api接口
router.post("/add", async (ctx, next) => {
    // 得到用户名，密码，确认密码
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    if (!/^\w{4,20}/.test(username)) {
        let json = {
            code:0,
            message: "用户名不合法",
        }
        ctx.body = json
    } else if (password != rpassword || password.length < 6) {
        let json = {
            code:0,
            message: "密码和确认密码不一致，或密码长度小于6位",
        }
        ctx.body = json
    } else {
        // 判断用户名在数据库中是否存在 
        let findResult = await DB.find("admin", { "username": username })
        if (findResult.length > 0) {
            let json = {
                code:0,
                message: "此用户已存在，请更换一个用户名",
            }
            ctx.body = json
        } else {
            // 满足要求了... 
            await DB.insert("admin", { "username": username, "password": tools.md5(password), "status": 1, "last_time": "" })
            let json = {
                code:1,
                message: "恭喜你，添加管理员成功了",
            }
            ctx.body = json
        }
    }
})

// 更新管理员的api接口
router.post("/edit", async (ctx, next) => {
   // 得到id
   let id = ctx.request.body.id
   // 得到用户名，密码，确认密码
   let username = ctx.request.body.username
   let password = ctx.request.body.password
   let rpassword = ctx.request.body.rpassword

   if (password != "") {
       if (password != rpassword || password.length < 6) {
        let json = {
            code:0,
            message: "密码和确认密码不一致，或密码长度小于6位",
        }
        ctx.body = json
          
       } else {
           await DB.update("admin", { "_id":DB.getObjectId(id) }, { "password": tools.md5(password) })
           ctx.redirect(ctx.state.__HOST__ + "/admin/manage")
       }
   } else {
       ctx.redirect(ctx.state.__HOST__ + "/admin/manage")
   }
})

// 获取轮播图数据的api接口
router.post("/getLunboTo/", async (ctx, next) => {
    // 从数据库中获取轮播图的数据

    // 以json的形式，把轮播图的数据返回
})

module.exports = router.routes()