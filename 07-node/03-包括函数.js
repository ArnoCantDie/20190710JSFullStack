// 包括函数：在执行某个函数之前执行若干个函数，在执行某个函数之后执行若干个函数，事务函数

// 把之前的函数存起来，把之后的函数存起来，就把它存储到对象。
let f1 = function(){
    console.log("正在执行任务...")
}
let wrappers = [
    {
        // warpper
        init(){
            console.log("hello 1")
        },
        close(){
            console.log("bye 1")
        }
    },
    {
        // warpper
        init(){
            console.log("hello 2")
        },
        close(){
            console.log("bye 2")
        }
    }
]

// 定义一个函数，把上面两者结合起来
const work = (core,wrappers)=>{
    // core是核心函数
    wrappers.forEach(wrap=>{
        wrap.init()
    })
    core()
    wrappers.forEach(wrap=>{
        wrap.close()
    })
}

work(f1,wrappers)

// 函数柯里化