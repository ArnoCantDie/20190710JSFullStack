const Koa = require('koa');
const koaStatic = require("koa-static")
const {ServerToken,ClientToken} = require("./mongoose")
const Router = require("koa-router")
const wechat = require("co-wechat")
const WechatAPI = require("co-wechat-api")
const OAuth = require('co-wechat-oauth');
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
                    "url": "http://wc.free.idcfengye.com/"
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
// 这里面得到的令牌，作用是去带着令牌去请求微信公众平台的api接口
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

const oauth = new OAuth(config.appID, config.appsecret);

router.get("/wxAuthrize",async ctx => {
    const state = ctx.query.id;
    // http://wc.free.idcfengye.com/wxAuthrize
    // console.log(ctx.href)
    let redirectUrl = ctx.href.replace("wxAuthrize","wxCallback")
    // console.log(redirectUrl) // http://wc.free.idcfengye.com/wxCallback
    console.log(redirectUrl)
    // http://wc.free.idcfengye.com/wxCallback
    const scope = "snsapi_userinfo"
    const url = oauth.getAuthorizeURL(redirectUrl,state,scope)
    ctx.redirect(url)
})

router.get("/wxCallback",async ctx=>{
    console.log("callback...")
    const code = ctx.query.code;
    // console.log(code)
    const token = await oauth.getAccessToken(code)
    const accessToken = token.data.access_token;
    console.log(accessToken)
    const openid = token.data.openid;

    let userInfo = await oauth.getUser(openid)
    console.log(userInfo)

    ctx.body = `
        <h1>${userInfo}</h1>
    `
})



app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000);

