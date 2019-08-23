const router = require("koa-router")()

let login = require("./admin/login")
let user = require("./admin/user")

// 得到资源的绝对路径
router.use(async (ctx,next)=>{
    // http://localhost:3000/admin/login
    // console.log("http://"+ctx.request.header.host)
    //配置全局的变量
    ctx.state.__HOST__ = "http://"+ctx.request.header.host;
    await next()
})

// 创建二级路由
router.get("/",async (ctx)=>{
    ctx.body = "后台首页面"
})

router.use("/login",login)
router.use("/user",user)

module.exports = router.routes()