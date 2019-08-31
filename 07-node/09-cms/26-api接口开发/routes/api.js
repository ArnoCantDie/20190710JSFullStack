const router = require("koa-router")()

// 创建二级路由
router.get("/",async (ctx)=>{
    ctx.body = "api接口"
})

let manage = require("./api/manage")

// 管理员的模块api接口
router.use("/manage",manage)

module.exports = router.routes()