// ----------------------  什么是泛型   泛型类
// 泛型，是java中的概念
// 型：类型  泛：宽泛   宽泛的类型    具体的类型
// 所谓的泛型就是指没有固定的类型，是什么类型还不确定

// 泛型类，如果一个类中使用泛型那么，这个类就叫泛型类
// Array是数组，现在要创建一个数组，至于数组中放什么类型数据，暂时确定不了
// 还没有具体的类型，可以使用泛型
// <T>表示到时候Array里面放什么类型不确定，T就是一个不确定的类型
// 当然T可以换成其它名字，一般都叫T
// T的类型不确定，就称T是一个泛型
// class MyArray<T>{
//     private list:T[] = [];
//     add(ele:T){
//         this.list.push(ele)
//     }
// }
// // 现在创建出来的arr，我要往里面放nubmer
// let arr = new MyArray<number>();
// arr.add(1)
// arr.add(2)
// arr.add(3)
// console.log(arr)  // MyArray { list: [ 1, 2, 3 ] }
// // 现在创建出来的arr，我要往里面放string
// let arr2 = new MyArray<string>();
// arr2.add("a")
// arr2.add("b")
// arr2.add("c")
// console.log(arr2) // MyArray { list: [ 'a', 'b', 'c' ] }


// ----------------------   泛型接口
// interface CalInterface{
//     <T>(a:T,b:T):T
// }
// 现在a和b的类型还不确定  add是函数   
// add:CalInterface 接口约束函数
// 约束函数的形参和返回值
// let add:CalInterface = function(a,b){
//     return a;
// }
// console.log(add(1,2))
// console.log(add("hello","world"))
// ----------------------               多个泛型 
// 不借助中间变量来交换两个变量的值 
// function swap(a:number,b:string){
// }
// swap(1,"a")

// function swap<A,B>(tuple:[A,B]):[B,A]{
//     return [tuple[1],tuple[0]];
// }
// console.log(swap([1,"a"]))  // [ 'a', 1 ]

// ---------------------- 默认泛型
// 就是上来先给泛型指定一个默认的数据类型  T=number
// function createArray<T=number>(length:number,value:T):T[]{
//     let arr:T[] = [];
//     for(let i=0; i<length; i++){
//         arr[i] = value;
//     }
//     return arr;
// }
// let arr = createArray(3,"a");
// console.log(arr) // [ 'a', 'a', 'a' ]

// ----------------------  泛型继承一个构造器
// function loger<T>(val:T){
//     console.log(val)
// }
// loger("abc")

// T extends String  表示到时候你传递的类型都应该是String的子类
// 泛型继承一个构造器 
// function loger<T extends String>(val:T){
//     console.log(val)
// }
// loger("abc")
// loger(123)
// ---------------------- 利用泛型接口约束对象
// 泛型接口
// interface Cart<T>{
//     list:T[]
// }
// let cart:Cart<number> = {list:[1,2,3]};

// interface Person{
//     name:string
// }
// let p:Person = {name:"wangcai"};
// ----------------------  泛型别名
// 通过type来定义
// type Cart<T> = {list:T[]} | T[] 
type Cart<T> = {list:T[]} | T[]
let c1:Cart<number> = {list:[1,2,3]}
let c2:Cart<string> = ["a","b","c"];
console.log(c1)  // { list: [ 1, 2, 3 ] }
console.log(c2)  // [ 'a', 'b', 'c' ]

// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------

export {};