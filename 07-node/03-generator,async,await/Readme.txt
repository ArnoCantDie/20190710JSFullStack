node.js  
UE图---->业务
UI图---->画页面  组件

vue常见面试题(junjin.im  知识星球  csdn)
准备一个项目

----------------------------------
node--->path   fs   http   url   querystring

fs.readFile("name.txt",function(){})

异步：
    异步顺程：回调(高阶函数)，promise，generator+co，asycn+await

------------------------------------
promise: 答应，承诺的意思  结果不能立即得到
利用promise主要解决：并发问题，链式调用问题  如果没有promise，之前全部靠回调函数。
回调会产生回调地域。
axios.get("/api/getUser",function(data){
    axios.get("/api/getCart",function(data){
        axios.get("/api/getCart/1",function(data){

        })
    })
})

---------------------------
Promise是一个类，使用之前需要new ，在new的时候，
需要给Promise传递一个执行器。这个执行器会立即执行。
在执行器中有两个参数：resolve,reject，是函数，就可以把promise从等待状到成功或失败。
promise有一个then方法，如果到成功状，它会调用then中的第1个函数
如果失败了，它会调用then中的第2函数。 在then中第1个函数的参数就是成功的结果，
在then中第2个函数就的参数就是失败的结果 

------------------
在执行器中可以写异步代码 
















