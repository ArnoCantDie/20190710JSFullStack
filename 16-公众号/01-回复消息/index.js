const Koa = require('koa');
const wechat = require("co-wechat")
const config = require("./config")
const app = new Koa();
app.use(wechat(config).middleware(async (message, ctx) => {
    // console.log(message)
    // console.log(message.Content)
    // return "欢迎关注本公众号~~"
    return "你好："+message.Content
}));
app.listen(3000);

