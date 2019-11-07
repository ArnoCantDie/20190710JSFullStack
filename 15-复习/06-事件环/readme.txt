事件环：
    浏览器中的事件环：
        微任务：promise.then  MutationObserver
        宏任务：script ajax  事件 setTimeout  setInterval  setImmediate MessageChannel  I/O  requestAnimationFrame
        浏览器中的事件环：
            看题
    node中的事件环：
        微任务：promise.then  process.nextTick
        宏任务：setTimeout  setInterval  setImmediate  I/O 
            代码    

宏任务与微任务：
    微任务：promise.then  MutationObserver  process.nextTick
    宏任务：script  ajax  事件 setTimeout  setInterval  setImmediate  MessageChannel  I/O  requestAnimationFrame 

上面的宏任务和微任务有些是属于浏览器，有些是属于node的。
    参考：https://juejin.im/post/5c7f87d4f265da2dce1f6961

进程与线程：
    进程：是OS分配和调度资源的基本单位，写代码一般是关注进程。当项目跑起来，就会产生进程。
    线程：进程中包含N个线程，真正干活的是线程。
    JS的主线程是单线程。同一时刻只能做一件事。
        js就一个线程，是错的。
    事件环：浏览器的事件和Node中的事件环。




































