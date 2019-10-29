// let name:string | number;
// console.log((name as string).length);

// ---------------------------- type 类型别名
// type  定义一个类型的别名
// type xx = (x:string,y:string)=>string
// let f:xx = function(fName,lName){
//     return fName+lName
// }
// let a:number = 1

// ---------------------------- 可选参数
// function f(name:string,age?:number){
// }

// ---------------------------- 默认参数
// function g(name:string="wangcai",age:number=100){
// }
// ---------------------------- 剩余参数
// function m(...args){
//     console.log(args)
// }
// m(1,2,3,4,5)  // [ 1, 2, 3, 4, 5 ]

// args  [ 1, 2, 3, 4, 5 ]
// function m(...args){
//     console.log(...args)
// }
// m(1,2,3,4,5)  // 1 2 3 4 5

// args  [ 1, 2, 3, 4, 5 ]
// function m(...args:number[]){
//     console.log(args)
// }
// m(1,2,3,4,5)  // 1 2 3 4 5

// args  [ 1, 2, 3, 4, 5 ]
// function m(...args:Array<number>){
//     console.log(...args)
// }
// m(1,2,3,4,5)  // 1 2 3 4 5
// ---------------------------- 函数的重载
// java 中 函数名一样，形参列表不一样，形参列表包含形参的个数和形参的类型
// ts 中 给同一个函数提供多种类型定义
class Person{
    // 类中包含
    // 实例属性
    name:string;
    // 实例方法
    say(){

    }
    // 静态属性
    static age:number;
    // 静态方法
    static aa(){

    }
    // 构造器
    constructor(){

    }
    // get set 访问器  修改器
}

// ---------------------------- 
// ---------------------------- 




export {};





