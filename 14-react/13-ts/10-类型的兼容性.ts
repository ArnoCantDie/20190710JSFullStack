// ---------------------------- 什么是类型的兼容性
// 类型：基本类型，class，interface  兼容
// interface Named {
//     name: string;
// }
// class Person {
//     name: string;
//     age:number;
// }
// let p: Named;  // 定义变量p 它的类型是Named，是一个接口类型
// p = new Person();  // p的类型是Named类型还是Person类型
// console.log(p)  // Person {}

// ---------------------------------- 接口兼容性

// interface Animal{
//     name:string;
//     age:number
// }
// interface Pelple{
//     name:string;
//     age:number;
//     address:string
// }
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// // let p = {name:"wangcai",age:100}
// let p:Pelple = {name:"wangcai222",age:100,address:"beijing"}
// let res = getAnimalName(p);
// console.log(res)

// --------------------------------

// interface Animal{
//     name:string;
//     age:number;
//     address:string
// }
// interface Pelple{
//     name:string;
//     age:number;
// }
// // animal:Animal 所谓的兼容性就是指需要一个小范围，可以传递一个大范围，此时兼容
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// // let p = {name:"wangcai",age:100}
// let p:Pelple = {name:"wangcai222",age:100}
// let res = getAnimalName(p);
// console.log(res)

// ---------------------------- 基本类型的兼容性

// let n:string | number;
// let k:string = "hello";
// n = k; // k是小范围   n是大范围  兼容了

// let n:string 
// let k:string | number;
// k = 123;
// n = k;  // 不兼容  把大范围的东西给小范围就不兼容

// ---------------------------- 类的兼容性
// class Aniaml{
//     name:string;
// }
// class Dog extends Aniaml{
//     age:string
// }
// let a:Aniaml; 
// a = new Dog();  // 兼容

// ---------------------
// class Aniaml{
//     name:string;
//     address:string;
// }
// class Demo{
//     name:string;
//     age:string
// }
// let k:Aniaml;
// k = new Demo();  // 不兼容

// ---------------------------- 函数的兼容性概念
// 函数：函数的形参和返回值 
// 对于函数的兼容性，需要考虑形参兼容生和返回值的兼容性

// ---------------------------- 函数形参的兼容性
// function f1(a:number,b:number):number{
//     return a+b;
// }
// // type可以定义一个类型
// type MyFun = (a:number,b:number)=>number;
// let g:MyFun;
// g = f1;  // 兼容了

// ----------------
// 对于形参的兼容性: 少给形参可以，多给形参不OK
// function f1(a:number,b:number):number{
//     return a+b;
// }
// // type可以定义一个类型
// type MyFun = (a:number,b:number,c:number)=>number;
// let g:MyFun;
// g = f1;  // 兼容了

// ---------------------------- 函数的返回值的兼容性
// {} 相成对象 函数的返回值类型是对象
// type GFun = ()=>{name:string,age:number}
// let g:GFun;

// function f1(){
//     return {name:"wangcai",age:1000}
// }
// g = f1;  // 兼容了

// -----------------

// type GFun = ()=>{name:string,age:number}
// let g:GFun;

// function f1(){
//     return {name:"wangcai",age:1000,address:"beijing"}
// }
// g = f1;  // 兼容了

// ---------------

// type GFun = ()=>{name:string,age:number,address:string}
// let g:GFun;

// function f1(){
//     return {name:"wangcai",age:1000}
// }
// g = f1;  // 兼容了

// ----------------------------  形参类型的兼容性
// type GFun = (a:number|string)=>void
// let g:GFun;
// function f(a:number){
//     console.log(a)
// }
// g = f; // 兼容

// -------------------- 
// type GFun = (a:number|string)=>void
// let g:GFun;
// function f(a:number|string|boolean){
//     console.log(a)
// }
// g = f; // 兼容
// ---------------------------- 泛型的兼容性 
// interface Demo<T>{
//     name:T
// }
// let x:Demo<string> = {name:"wangcai"}
// let y:Demo<number> = {name:123}

// x = y; // 不兼容

// --------------

// interface Demo<T>{
//     name:T
// }
// let x:Demo<string>;
// let y:Demo<number>;
// x = y; // 也不兼容

// ------------- 
// 如果是一个空接口，彼此赋值是兼容
// interface Demo<T>{
// }
// let x:Demo<string>;
// let y:Demo<number>;
// x = y; // 兼容了

// ------------
// interface Demo1{
//     name:string
// }
// interface Demo2{
//     name:number;
// }
// let a:Demo1;
// let b:Demo2;
// a = b; // 不兼容

// ------------ 
// interface Demo1{
//     name:string
// }
// interface Demo2{
//     name:string;
// }
// let a:Demo1;
// let b:Demo2;
// a = b; // 兼容了

// ---------------------------- 枚举的兼容性
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Colors;
// c = 123;
// console.log(c)  // 兼容的

// ------------------- 
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Colors;
// c = Colors.RED;
// console.log(c) // 0
// --------------------
enum Colors{
    RED,
    GREEN,
    BLUE
}
let n:number;
n = Colors.RED;  // 兼容的


// ----------------------------

// ----------------------------




export {};