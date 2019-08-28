const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")

// 渲染分类数据的页面
router.get("/", async (ctx, next) => {

    let result = await DB.find("articlecate",{})
    await ctx.render("admin/articlecate/index",{
        list:tools.cateToList(result)
    })
})

module.exports = router.routes()