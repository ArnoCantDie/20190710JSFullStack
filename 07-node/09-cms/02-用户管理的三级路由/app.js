const Koa = require("koa")
const router = require("koa-router")()
const path = require("path")
const static = require("koa-static")

// 实例化一个koa 
let app = new Koa(); 

// 引入路由模块 
let index = require("./routes/index")  // 前台入口
let admin = require("./routes/admin")  // 前台入口
let api = require("./routes/api")  // 前台入口

// 创建一级路由
router.use("/admin",admin);
router.use("/api",api);
router.use("/",index);

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods());

// 监听端口
app.listen(3000)
