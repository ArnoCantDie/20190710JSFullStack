// 在promise中有  executor 执行器
// 默认创建出来的promise有三种状态
// 等待态   成功态  失败态

// promise  默认处于等待态
// resolve,reject 可以改变状态

// 从等待到失败有两种方式：reject()  throw new Error()
let promise = new Promise((resolve,reject)=>{
    // console.log("hello")
    // resolve("包");
    // reject("没钱")
    throw new Error("没钱...");
})
promise.then((data)=>{console.log(data)},(err)=>{console.log(err)});



// promise是为了解决异步  回调有嵌套问题
// 有优缺点：
// 优点：优雅解决异步问题，异步并发
// 缺点：内部也是基于回调的