const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools.js")

// 管理员列表
router.get("/",async (ctx)=>{
    let result = await DB.find("admin",{})
    // console.log(result)
    // ctx.body = "管理员管理列表"
    await ctx.render("admin/manage/list",{
        list:result
    })
})

// 渲染增加管理员页面
router.get("/add",async (ctx)=>{
    // ctx.body = "增加管理员"
    await ctx.render("admin/manage/add")
})

// 处理增加管理员逻辑
router.post("/doAdd",async (ctx)=>{

    // 得到用户名，密码，确认密码
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword

    if(!/^\w{4,20}/.test(username)){
        await ctx.render("admin/error",{
            message:"用户名不合法",
            redirect: ctx.state.__HOST__+"/admin/manage/add"
        })
    }else if(password != rpassword || password.length<6){
        await ctx.render("admin/error",{
            message:"密码和确认密码不一致，或密码长度小于6位",
            redirect: ctx.state.__HOST__+"/admin/manage/add"
        })
    }else{
        // 判断用户名在数据库中是否存在 
        let findResult = await DB.find("admin",{"username":username})
        if(findResult.length>0){
            await ctx.render("admin/error",{
                message:"此用户已存在，请更换一个用户名",
                redirect: ctx.state.__HOST__+"/admin/manage/add"
            })
        }else{
            // 满足要求了... 
            await DB.insert("admin",{"username":username,"password":tools.md5(password),"status":1,"last_time":""})
            ctx.redirect(ctx.state.__HOST__+"/admin/manage/")
        }
    }
    
})


module.exports = router.routes()