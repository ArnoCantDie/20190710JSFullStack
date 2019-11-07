const Koa = require('koa');
const koaStatic = require("koa-static")
const {ServerToken} = require("./mongoose")
const Router = require("koa-router")
const wechat = require("co-wechat")
const WechatAPI = require("co-wechat-api")
const config = require("./config")

const app = new Koa();
const router = new Router();

let menu = {
    "button": [
        {
            "type": "click",
            "name": "今日歌曲",
            "key": "V1001_TODAY_MUSIC"
        },
        {
            "name": "菜单",
            "sub_button": [
                {
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}

app.use(koaStatic(__dirname + "/"))

// 自己的服务器要接入到腾讯的服务器
router.all('/wechat', wechat(config).middleware(async message => {
    return "hello"
}));

// co-wechat-api 处理access_token
const api = new WechatAPI(config.appID, config.appsecret,
    async ()=>await ServerToken.findOne(),
    async token=>await ServerToken.updateOne({},token,{upsert:true})
)

// 后面去调接口就是api.xxxx 
router.get("/getFollers", async ctx => {
    let res = await api.getFollowers();
    api.createMenu(menu);
    console.log(res)
    ctx.body = res
})







app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000);

