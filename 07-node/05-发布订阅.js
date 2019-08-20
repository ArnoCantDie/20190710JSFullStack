// 先订阅 再发布   订阅和发布之间是没有关系  

const fs = require("fs")
let content = {};
// let content = {name:"wangcai",age:10} 
// console.log(Object.keys(content))  // [ 'name', 'age' ]
// button.on("click",function(){
// })

// 订阅时把on后面的函数保存到一个容器中，发布时，拿到这个容器，把里面的函数都执行了
// 订阅

let e = {
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>fn())
    }
}

e.on(()=>{
    // console.log("订阅了... 哈哈哈")
    if(Object.keys(content).length === 2){
        console.log(content)
    }
})
// e.on(()=>{
//     console.log("订阅了... 哈哈哈")
//     if(Object.keys(content).length === 2){
//         // console.log("2----->",content)
//     }
// })
e.emit()  // 发布
fs.readFile("name.txt","utf8",(err,data)=>{
    content["name"] = data;
    e.emit()  // 发布
})
fs.readFile("age.txt","utf8",(err,data)=>{
    content["age"] = data;
    e.emit()  // 发布
})

