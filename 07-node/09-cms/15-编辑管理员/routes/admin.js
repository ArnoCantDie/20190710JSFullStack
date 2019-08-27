const router = require("koa-router")()
const url = require("url")


// 得到资源的绝对路径
router.use(async (ctx,next)=>{
    ctx.state.__HOST__ = "http://"+ctx.request.header.host;

    let pathname = url.parse(ctx.request.url).pathname.substring(1)
    let splitUrl = pathname.split("/")

    ctx.state.G = {
        url:splitUrl,
        userinfo:ctx.session.userinfo
    }

    if(ctx.session.userinfo){
        await next()
    }else{
        if(pathname == "admin/login" || pathname == "admin/login/doLogin" || pathname == "admin/login/code"){
            await next()
        }else{
            ctx.redirect("/admin/login")
        }
    }
})
let index = require("./admin/index")
let login = require("./admin/login")
let manage = require("./admin/manage")

// 后台首页面
router.use(index)  // 默认就是 / 
// 登录模块
router.use("/login",login)
// 管理员模块
router.use("/manage",manage)

module.exports = router.routes()