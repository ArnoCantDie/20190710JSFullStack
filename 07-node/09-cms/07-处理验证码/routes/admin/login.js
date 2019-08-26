const router = require("koa-router")()
const DB = require("../../model/db")
const svgCaptcha = require('svg-captcha');

// 创建二级路由
router.get("/", async (ctx, next) => {
    // ctx.body = "登录页面"
    await ctx.render("admin/login")
    await next()
})

// 处理用户登录时填写信息 
router.post("/doLogin", async (ctx) => {
    // console.log("......")
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let code = ctx.request.body.code;
    // 判断用户提交的验证码和session中保存的验证码是否一样
    if (code.toLocaleLowerCase() === ctx.session.code.toLocaleLowerCase()) {
        // 验证码一至
        // 去连接数据库，对比uername和password和数据库的是否一样。
        var result = await DB.find("users", { "username": username, "password": password })
        // console.log(result)
        if (result.length > 0) {
            ctx.session.userinfo = result[0]
            // console.log(ctx.session)
            ctx.redirect(ctx.state.__HOST__ + "/admin")
        } else {
            // 用户名和密码错误
            ctx.render("admin/error",{
                message:"用户名和密码错误",
                redirect:ctx.state.__HOST__+"/admin/login"
            })
        }

    } else {
        // 验证码错误
        ctx.render("admin/error",{
            message:"验证码错误",
            redirect:ctx.state.__HOST__+"/admin/login"
        })
    }


})

// 生成验证码
router.get("/code", async (ctx, next) => {
    var captcha = svgCaptcha.create({
        width: 120,
        height: 40,
        fontSize: 40
    });


    // var captcha = svgCaptcha.createMathExpr({
    //     background:"skyblue",
    //     width:100,
    //     height:40,
    //     fontSize:40
    // })
    // 保存验证码
    ctx.session.code = captcha.text;
    // 设置响应头
    ctx.response.type = "image/svg+xml"
    // 响应验证码
    ctx.body = captcha.data
    await next();
})

module.exports = router.routes()