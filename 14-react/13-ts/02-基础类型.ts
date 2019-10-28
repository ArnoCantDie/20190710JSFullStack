// string  boolean  number   Array
// tuple  enum
// wc 类型主浊tuple
// let wc:[string,number] = ["wangcai",100];
// console.log(wc[0])

// 在枚举中先定义类型，再使用
// Week 现在就定义了一个Week类
// enum Week{
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// let today:Week = Week.Monday;
// console.log(today)  // 0

// enum Color{
//     RED,
//     GREEN,
//     BLUE
// }
// // console.log(Color.RED)
// console.log(Color.SKYBLUE)

// --------------------------

// // Any 任意类型
// let name:any = 123;
// name = "hello";
// name = true;
// name = undefined;
// // 如果一个变量的类型是any，那么可以给这个变量赋任何类型的值

// --------------------------


// Void  通常作为函数的返回值类型
// 函数返回void，表示这个函数没有任何返回的值
// function sum(num1:number,num2:number):number{
//     return num1+num2;
// }
// console.log(sum(1,2))

// function sum(num1:number,num2:number):void{
//     console.log(num1+num2);
// }
// console.log(sum(1,2))  // 如果函数返回void，默认得到的undeiend
// --------------------------


// Null 和 Undefined 
// null是一个数据类型，这种数据类型对应的值还是null
// let a:null = null;
// console.log(a)

// undefined是一种数据类型，这个数据类型对应的值还是undefined
// let a:undefined = undefined;
// console.log(a)

// 默认情况下null和undefined是所有类型的子类型
// 可以把undefiend当作number的子类型
// 可以把undefined赋给number类型的变量
// let age:number = 100;
// age = undefined;
// console.log(age)

// let name = "wangcai";
// name = undefined;
// console.log(name)

// let abc:null = null;
// abc = undefined;
// console.log(abc)

// let abc:undefined = undefined;
// abc = null;
// console.log(abc)

// let abc:undefined = null;
// console.log(abc)

// --------------------------


// Never  永远不知道类型的类型就是never类型
// 现在有一个函数，我们 永远不知道这个函数返回的数据类型，此时就可以把这个函数的返回值类型声明成never
// function sum():never{
//     // return 1;
//     // 如果函数一定要抛出一个错误，那么它的返回值就是一个never
//     throw Error("未知错误");
// }


// --------------------------


// Object 对象类型

// --------------------------

// |  给形参指定多种类型
// function sum(x:number|string){
//     if(typeof x == "number"){
//         console.log(x)
//     }else if(x == "string"){
//         console.log(x)
//     }else{
//         console.log(x)
//     }
// }



// 在TS中，把类型分成了两类：
// 1，基本类型
    // number, string, boolean, Array
    // tuple, enum, null, undefined, any, never, void
// Object


export {};