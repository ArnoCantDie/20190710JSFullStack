// --------------------- ES6中class的基本使用 
// class Animal{
//     // es提供了class  
//     constructor(name){
//         // 叫实例属性
//         this.name = name;
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.name)

// -------------------------- ES6模拟抽象类
// class Animal{
//     // es提供了class  
//     constructor(name){
//         if(new.target === Animal){
//             throw new Error("Animal不能new")
//         }
//         // 叫实例属性
//         this.name = name;
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.name)

// ----------------------  定义公有的属性
// class Animal{
//     // 实例属性
//     age = 10000;  // ES7中提出的草案  bable
//     constructor(name){
//         // 叫实例属性
//         this.name = name;
//     }
//     // 公有属性  就是原型上面的属性
//     say(){
//         console.log("say....")
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.age)
// console.log(a.hasOwnProperty("name"))  // ture
// console.log(a.hasOwnProperty("say"))  // false

// --------------------- 访问器
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     // 访问器
//     get age(){
//         return 100
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.age) // 10  使用时当成属性来用

// 属性：实例属性，公有属性  静态属性

// -------------------------- 访问器也是公有属性
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     get age(){
//         return 666
//     }
// }
// let a = new Animal("wangcai")
// console.log(a.age)  // 666
// console.log(a.hasOwnProperty("age")) // false  说明不是实例属性
// console.log(a.__proto__.hasOwnProperty("age")) // true  说明是公有属性

// ---------------------- 静态属性
class Animal {
    static a = 110;
    constructor(name) {
        this.name = name;
    }
    get age() {
        return 666
    }
}
let a = new Animal("wangcai")
console.log(Animal.a)  

