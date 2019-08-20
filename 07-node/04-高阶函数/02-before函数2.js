const f1 = (...args)=>{
    console.log("正在执行任务...",args)
}
Function.prototype.before = function(beforeFn){   // beforeFn叫回调函数
    return (...args)=>{  // ...args 叫rest参数 用来接收1,2,3
        beforeFn();
        this(...args);  // 把1,2,3继续传递给f1
    }
}
const f2 = f1.before(()=>{
    console.log("开始...")
})
f2(1,2,3)
























