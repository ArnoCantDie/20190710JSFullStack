// https://www.jianshu.com/p/0790efc02c22
// koa-view  express   ejs  可以把数据渲染到模板，然后输出给客户端
// 后端：给前端写api接口    拿到前端写的模板，把模板中的数据删除掉，然后通过模板引擎，把真实的数据渲染到模板的合适位置
const Koa = require("koa")
const views = require('koa-views');
const path = require("path")
var app = new Koa();
// C:\Users\Administrator\Desktop\20190710JSFullStack\07-node\views
console.log(path.join(__dirname, '/views'))
app.use(views(path.join(__dirname, '/views'), {
    extension: 'ejs'
}))

app.use(async (ctx,next)=>{
    await ctx.render("index",{title:"Koa"})
})

app.listen(3030)