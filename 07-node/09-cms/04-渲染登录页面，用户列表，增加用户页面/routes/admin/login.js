const router = require("koa-router")()

// 创建二级路由
router.get("/",async (ctx)=>{
    // ctx.body = "登录页面"
    await ctx.render("admin/login")
})

module.exports = router.routes()