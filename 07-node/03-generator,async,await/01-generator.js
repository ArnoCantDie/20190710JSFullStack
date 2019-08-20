/*
------------------ 生成器的概念
// generator 生成器  es6中的语法 
// 生成器 生成 迭代器  让程序中断 不会把{}中的代码全部执行
// yield 1 表示产出一个1
function * read(){
    yield 1;  // 只有产出，并不行
}
// 调用生成器 生成 迭代器   it就是迭代器
let it = read()
--------------------
// 生成器可以产出很多值，迭代器只能next一下，拿一值，next一下，拿一下值
function * read(){
    yield 1;  
}
let it = read()
console.log(it.next())  // { value: 1, done: false }
console.log(it.next())  // { value: undefined, done: true }
--------------------
// 生成器可以产出很多值，迭代器只能next一下，拿一值，next一下，拿一下值
function * read(){
    yield 1;  
    yield 2;
    yield 3;
}
// 调用read()  返回值是迭代器
let it = read()
console.log(it.next())  // { value: 1, done: false }
console.log(it.next())  // { value: 2, done: false }
console.log(it.next())  // { value: 3, done: false }
console.log(it.next())  // { value: undefined, done: true }

--------------------
function * read(){
    let a = yield 1; 
    console.log(a)    // 9
    let b = yield 2;
    console.log(b)    // 10
    let c = yield 3;
    console.log(c)   // 11
}
let it = read()
console.log(it.next())   // { value: 1, done: false }
console.log(it.next(9))    // { value: 2, done: false }
console.log(it.next(10))   // { value: 3, done: false }
console.log(it.next(11))   // { value: undefined, done: true }
--------------------
function * read(){
    let a = yield 1; 
    let b = yield 2;
    let c = yield 3;
}
let it = read()
// 第一个next中的参数没有任何意义
console.log(it.next("xxx")) // { value: 1, done: false }
--------------------
const fs = require("fs").promises;
// 生成器
function * read(){
    yield fs.readFile("./name.txt","utf-8")
}
// 迭代器
let it = read()
// console.log(it.next())  // { value: Promise { <pending> }, done: false }
it.next().value.then(data=>{
    console.log(data)  // age.txt
})

--------------------
const fs = require("fs").promises;
function * read(){
    let concent = yield fs.readFile("./name.txt","utf-8")
    yield fs.readFile(concent,"utf-8")

}
let it = read()
it.next().value.then(data=>{
    // console.log(data)  
    // console.log(it.next(data)) // { value: Promise { <pending> }, done: false }
    it.next(data).value.then(data=>{
        console.log(data)  // 666
    })
})

--------------------
const fs = require("fs").promises;
function * read(){
    let concent = yield fs.readFile("./name.txt","utf-8")
    let age = yield fs.readFile(concent,"utf-8")
    return age
}
let it = read()
it.next().value.then(data=>{
    it.next(data).value.then(data=>{
        let r = it.next(data)
        console.log(r)  // { value: '666', done: true }
    })
})
// 异步的发展顺程：回调---->promise---->generator+co---->
--------------------
const fs = require("fs").promises;
function * read(){
    let concent = yield fs.readFile("./name.txt","utf-8")
    let age = yield fs.readFile(concent,"utf-8")
    return age
}
let co = require("co")
co(read()).then(data=>{
    console.log(data)  // 666
})

// 异步的发展顺程：回调---->promise---->generator+co---->async+await
--------------------
--------------------
*/
const fs = require("fs").promises;
async function read(){
    let concent = await fs.readFile("./name.txt","utf-8")
    let age = await fs.readFile(concent,"utf-8")
    return age
}
read().then(data=>{
    console.log(data)   // 666
})

// 异步的发展顺程：回调---->promise---->generator+co---->async+await
// 说一下异步的发展顺程  说一下异步的解决方案