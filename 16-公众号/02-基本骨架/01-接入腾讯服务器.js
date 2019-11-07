const Koa = require('koa');
const wechat = require("co-wechat")
const config = require("./config")
const app = new Koa();
// 回复文本消息
// app.use(wechat(config).middleware(async (message, ctx) => {
//     // console.log(message)
//     // console.log(message.Content)
//     // return "欢迎关注本公众号~~"
//     return "你好："+message.Content
// }));

// --------------------------- 也是回复文本消息
app.use(wechat(config).middleware(async (message, ctx) => {
    return {type: "text", content: 'Hello world!'};
}));

// -------------------- 回复音乐
// app.use(wechat(config).middleware(async (message, ctx) => {
//     return {
//         title: "来段音乐吧",
//         description: "一无所有",
//         musicUrl: "http://mp3.com/xx.mp3",
//         hqMusicUrl: "http://mp3.com/xx.mp3"
//       };;
// }));

// ---------------- 回复图文
// app.use(wechat(config).middleware(async (message, ctx) => {
//     return [
//         {
//             title: '你来我家接我吧',
//             description: '这是女神与高富帅之间的对话',
//             picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
//             url: 'http://nodeapi.cloudfoundry.com/'
//         }
//     ];
// }));


// --------------------- 回复图片
// app.use(wechat(config).middleware(async (message, ctx) => {
//     return {
//         type: "image",
//         content: {
//           mediaId: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573714253&di=7b502014450b579396f9e034d4d02216&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2016-11%2F20161118165845798.jpg'
//         }
//       };;
// }));

app.listen(3000);

