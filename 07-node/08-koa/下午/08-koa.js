// 把数据渲染到模板中，然后把模板返回浏览器
// koa-views 

const Koa = require("koa")
const path = require("path")
const views = require("koa-views")
const app = new Koa()
console.log(path.join(__dirname,"/views"))
app.use(views(path.join(__dirname,"/views"),{
    extension: 'ejs'
}))

app.use(async (ctx,next)=>{
    await ctx.render("index",{title:"Koa"})
    await next()
})



app.listen(3333)