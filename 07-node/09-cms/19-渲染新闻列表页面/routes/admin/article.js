const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")

// 渲染内容列表页面
router.get("/", async (ctx, next) => {
    let result = await DB.find("article",{})
    await ctx.render("admin/article/index",{
        list:result
    })
})
// 渲染添加内容页面
router.get("/add", async (ctx, next) => {
    await ctx.render("admin/article/add")
})



module.exports = router.routes()