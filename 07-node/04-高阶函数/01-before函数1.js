// 高阶函数主要指：第1个，这个函数中的参数是函数。第2个，这个函数的返回值是函数。

// before函数(装饰函数，AOP)  在执行一个函数之前去执行另一个函数 
const f1 = ()=>{
    console.log("正在执行任务...")
}

// 要在f1之前打印 开始... 
Function.prototype.before = function(beforeFn){   // beforeFn叫回调函数
    // 箭头函数中没有this
    return ()=>{
        beforeFn();
        this(); // 谁调用了before函数，this就指谁
    }
}
// f2是返回的新函数
const f2 = f1.before(()=>{
    console.log("开始...")
})
// f2()

const f3 = f1.before(()=>{
    console.log("f3 开始...")
})
f3()
























