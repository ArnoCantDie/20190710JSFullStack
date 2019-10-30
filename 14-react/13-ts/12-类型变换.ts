// ----------------------- 交叉类型
// 把多个类型合并成一个类型
// interface Dog{
//     name:string,
//     say():void
// }
// interface Pig{
//     age:number,
//     jump():void
// }
// // Animal 就是交叉类型
// type Animal = Dog & Pig
// let a:Animal = {name:"wangcai",say(){},age:100,jump(){}}

// ----------------------- typeof 
// 定义了一个类型
// type People = {
//     name:string,
//     age:number
// }
// // 先定义类型，再去定义某个变量是这种类型
// let p:People = {
//     name:"wangcai",
//     age:100
// }

// --------------- 

// 也可以先定义变量，再去定义类型
// p还没有类型来约束它
// let p = {
//     name:"wangcai",
//     age:100,
//     address:"xxx"
// }
// // 定义了一个类型是People
// // 先定义一个变量，再根据这个变量生成一个类型
// type People =  typeof p;

// let p1:People = {
//     name:"wangcai",
//     age:100,
//     address:"xxx"
// }

// ----------------------- 索引访问操作符
interface Demo{
    name:string,
    age:number,
    address:{name:string}
}
let d:Demo["address"] = {name:"beijing"}
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------