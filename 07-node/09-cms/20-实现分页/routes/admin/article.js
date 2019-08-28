const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const multer = require("koa-multer")

// 渲染内容列表页面
router.get("/", async (ctx, next) => {
    let page = ctx.query.page || 1;
    let pageSize = 5;
    // 获取总的条数
    let resultCount = await DB.count("article",{})
    // 计算总的页数 
    let totalPages = Math.ceil(resultCount/pageSize)
    let result = await DB.find("article",{},{},{
        page,
        pageSize
    })
    await ctx.render("admin/article/index",{
        list:result,
        page:page,
        totalPages:totalPages
    })
})
// 渲染添加内容页面
router.get("/add", async (ctx, next) => {
    await ctx.render("admin/article/add")
})



module.exports = router.routes()