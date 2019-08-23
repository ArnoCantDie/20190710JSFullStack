const router = require("koa-router")()
const DB = require("../../model/db")

// 创建二级路由
router.get("/",async (ctx,next)=>{
    // ctx.body = "登录页面"
    await ctx.render("admin/login")
    await next()
})

// 处理用户登录时填写信息 
router.post("/doLogin",async (ctx)=>{
    // console.log("......")
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    // 去连接数据库，对比uername和password和数据库的是否一样。
    var result = await DB.find("users",{"username":username,"password":password})
    // console.log(result)
    if(result.length>0){
        ctx.session.userinfo = result[0]
        console.log(ctx.session)
        ctx.redirect(ctx.state.__HOST__+"/admin")
    }else{

    }
})

module.exports = router.routes()