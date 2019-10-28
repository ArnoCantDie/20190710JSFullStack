// 有函数声明和函数表达式
// 在ts需要给形参和返回值加上类型
// function say(name:string):string{
//     return "hello"+name;
// }
// console.log(say("wangcai"));

// -----------------------------  ts中的函数的基本用法
// 函数表达式  在ts中也是可以写js
// let say = function(name){
//     return "hello "+ name;
// }
// console.log(say("xiaoqiang"));

// vscode默认就对ts支持比较好
// C#  vscode  ts  同一个人
// let say = function(name:string):string{
//     return "hello "+ name;
// }
// console.log(say("xiaoqiang"));

// ----------------------------- 函数的可选参数
// function say(name:string,age?:number):void{
//     // 对于可选来说，如果调用时，没有传递，它的默认值就是undefined
//     console.log(name,age)
// }
// say("wangcai",100);
// // 有时候，给函数传递的参数个数是不确定，在形中写上一个?:表示可选参数
// say("wangcai");


// ----------------------------- 函数默认参数
// function say(name:string="wangcai",age:number=100):void{
//     console.log(name,age)
// }
// say();
// say("xiaoqiang",1000);


// ----------------------------- 函数的剩余参数
function sum(...numbers:Array<number>):void{
    console.log(numbers)  // [ 1, 2, 3, 4, 5 ]
}
// 1,2,3,4,5 实参的个数也不确定
sum(1,2,3,4,5)

// ----------------------------- java中函数的重载
// 在C#，java中都有函数的重载
// 在java中函数的重载和ts中函数的重载不一样
// 在java中函数的重载，表示有多个函数，函数名一样，函数的形参不一样（形参的个数，形参的类型）
// 在java中，函数重载如下：
// say表示函数名，一样，形参的个数不一样，函数重载
// function say(name:string):void{}
// function say(name:string,age:number):void{}

// say表示函数名，一样，形参的个数一样，形参的类型不样
// function say(name:string):void{}
// function say(name:number):void{}

// say("hello")  say("wangcai",100)

// ----------------------------- ts中的函数重载（不太正宗）
// 在ts中，函数重载仅仅是指提供多个函数定义
// 下面三个函数定义就构成了ts中的函数重载
// let obj = {name:"wangcai",age:100}
// function attr(val:string):void;
// function attr(val:number):void;
// function attr(val:any){
//     if(typeof val === "string"){
//         obj.name = val;
//     }else if(typeof val === "number"){
//         obj.age = val;
//     }
// }
// attr("xqq");
// attr(666)
// console.log(obj);

// ----------------------------- 函数类型
type MySay = (x:string,y:string)=>string
let say:MySay = function(firstname,lastname){
    return firstname+lastname;
}
console.log(say("张","3"))

// -----------------------------
// -----------------------------
// -----------------------------



export {};
