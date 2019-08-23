const router = require("koa-router")()

let login = require("./admin/login")
let user = require("./admin/user")

// 创建二级路由
router.get("/",async (ctx)=>{
    ctx.body = "后台首页面"
})

router.use("/login",login)
router.use("/user",user)

module.exports = router.routes()