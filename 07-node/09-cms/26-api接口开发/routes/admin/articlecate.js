const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")

// 渲染分类列表的页面
router.get("/", async (ctx, next) => {

    let result = await DB.find("articlecate",{})
    await ctx.render("admin/articlecate/index",{
        list:tools.cateToList(result)
    })
})
// 渲染添加分类页面
router.get("/add", async (ctx, next) => {

    let result = await DB.find("articlecate",{"pid":"0"})
    await ctx.render("admin/articlecate/add",{
        cateList:result
    })
})
// 处理添加分类逻辑
router.post("/doAdd", async (ctx, next) => {

//     {    title: 'abc',
//          pid: '成功案例',
//          keywords: 'abc',
//          status: '1',
//          description: 'abc' 
//     }
    // console.log(ctx.request.body)
    let addData = ctx.request.body
    await DB.insert("articlecate",addData)
    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate")

})
// 渲染编辑分类页面
router.get("/edit", async (ctx, next) => {
    let id = ctx.query.id;
    let result = await DB.find("articlecate",{"_id":DB.getObjectId(id)})
    let articlacate = await DB.find("articlecate",{"pid":"0"})
    await ctx.render("admin/articlecate/edit",{
        list:result[0],
        catelist:articlacate
    })
})

// 处理编辑分类逻辑
router.post("/doEdit", async (ctx, next) => {
    // { title: 'koa666',
    // id: '5d65e43e249769161cc82233',
    // pid: '5d65e3d2249769161cc82231',
    // keywords: 'koa666',
    // status: '1',
    // description: 'koa666' }
    let editData = ctx.request.body;
    let id = editData.id;
    let title = editData.title;
    let pid = editData.pid;
    let keywords = editData.keywords;
    let status = editData.status;
    let description = editData.description;

    await DB.update("articlecate",{"_id":DB.getObjectId(id)},{
        title,pid,keywords,status,description
    })

    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate")
})


module.exports = router.routes()