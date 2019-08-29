const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const multer = require("koa-multer")

// 上传文件的相关配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')  // 上传的文件 保存在什么地方
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });

// 渲染内容列表页面
router.get("/", async (ctx, next) => {
    let page = ctx.query.page || 1;
    let pageSize = 5;
    // 获取总的条数
    let resultCount = await DB.count("article", {})
    // 计算总的页数 
    let totalPages = Math.ceil(resultCount / pageSize)
    let result = await DB.find("article", {}, {}, {
        page,
        pageSize
    })
    await ctx.render("admin/article/index", {
        list: result,
        page: page,
        totalPages: totalPages
    })
})
// 渲染添加内容页面
router.get("/add", async (ctx, next) => {
    await ctx.render("admin/article/add")
})

// 接收客户端上传的新闻内容（普通的文本，图片）
router.post("/doAdd", upload.single('pic'), async (ctx)=>{
    ctx.body = {
        filename:ctx.req.file.filename,
        body:ctx.req.body
    }
})



module.exports = router.routes()