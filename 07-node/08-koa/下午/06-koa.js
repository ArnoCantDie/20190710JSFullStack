// https://www.jianshu.com/p/0790efc02c22
// koa-static
const Koa = require("koa")
// koa-static是用来托管静态资源
const serve = require('koa-static');
var app = new Koa();
app.use(serve(__dirname + '/public'));

app.listen(3030)