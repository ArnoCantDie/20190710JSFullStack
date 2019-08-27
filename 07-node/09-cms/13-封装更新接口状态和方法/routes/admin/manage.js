const router = require("koa-router")()
const DB = require("../../model/db")

// 管理员列表
router.get("/",async (ctx)=>{
    let result = await DB.find("admin",{})
    // console.log(result)
    // ctx.body = "管理员管理列表"
    await ctx.render("admin/manage/list",{
        list:result
    })
})

// 增加管理员
router.get("/add",async (ctx)=>{
    // ctx.body = "增加管理员"
    await ctx.render("admin/manage/add")
})


module.exports = router.routes()