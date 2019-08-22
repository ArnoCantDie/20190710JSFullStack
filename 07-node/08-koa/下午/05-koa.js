// https://www.jianshu.com/p/0790efc02c22
// koa-router
const Koa = require("koa")
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
app.use(router.routes()).use(router.allowedMethods());

router.get("/",(ctx,next)=>{
    ctx.body = "首页"
})
router.get("/my",(ctx,next)=>{
    ctx.body = "个人中心"
})
router.get("/setting",(ctx,next)=>{
    ctx.body = "设置"
})

app.listen(3030)