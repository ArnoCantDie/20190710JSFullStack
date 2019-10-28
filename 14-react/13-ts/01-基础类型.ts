// js  let a = 110; 

// ts 中规定了变量的类型
// 布尔值  
// 数字  
// 字符串  
// 数组


// 字符串
// let name:string = "wangcai";
// console.log(name)

// 数字
// let age:number = 111222;
// console.log(age)

// 布尔
// let flag:boolean = true;
// console.log(flag)

// 在ts中给一个变量赋完值，下面可以重新赋值（同类型）
// let age:number = 111222;
// age = 666;
// console.log(age)


// 在ts中给一个变量赋完值，下面可以重新赋值（同类型）
// let age:number = 111222;
// age = "hello"; // 如果是number你又给它赋了一个字符串就出错了
// console.log(age)

// 定义一个数组，在一个数组中只能放同类型的数据
// let arr:number[] = [1,2,3];
// console.log(arr)
// let arr:string[] = ["wc","xq","zs"];
// console.log(arr)

// let arr:Array<number> = [1,2,3]
// console.log(arr)

// 元组 Tuple  
// let xq:[string,number] = ["xiaoqiang",100];
// xq它的类型就是一个元组类型
// console.log(xq[0].substr(1))
// let point:[number,number] = [100,200];
// point的类型就是一个无组类型

// 枚举类型，是对原有类型的补充
// enum Sex{
//     BOY, 
//     GIRL
// }
// let p1:Sex = Sex.BOY;
// console.log(p1)  // 0
// let p2:Sex = Sex.GIRL;
// console.log(p2)  // 1

// enum Sex{
//     BOY=10, 
//     GIRL
// }
// let p1:Sex = Sex.BOY;
// console.log(p1)  // 10
// let p2:Sex = Sex.GIRL;
// console.log(p2)  // 11

// enum Sex{
//     BOY=10, 
//     GIRL=100
// }
// let p1:Sex = Sex.BOY;
// console.log(p1)  // 10
// let p2:Sex = Sex.GIRL;
// console.log(p2)  // 100



// Any   
// Void  
// Null 和 Undefined   
// Never   
// Object





export {};








