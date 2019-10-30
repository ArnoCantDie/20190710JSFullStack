// ------------------ typeof 关键字  typeof类型保护
// function sum(val:string|number|boolean){
//     // return val.length  // 出错
//     if(typeof val === "string"){
//         return val.length;
//     }else if(typeof val === "boolean"){
//         return 0;
//     }
// }
// sum(1);
// sum("abc");
// sum(true);
// ------------------ instanceof 关键字  instaanceof类型保护
// class Animal{
//     name:string 
// }
// class Dog extends Animal{
//     age:number
// }
// function f(a:Animal){
//     if(a instanceof Dog){

//     }else if(a instanceof Animal){

//     }
// }
// let d = new Dog();
// f(d) // 兼容了
// let a = new Animal();
// f(a) // 没有问题

// ------------------ null 的用法  null的类型保护
// function f(val:string | null){
//     // if(val == null){
//     //     return ""
//     // }
//     // val = val || "" //  || 逻辑或
//     function g(){
//         // !. 忽略null
//         console.log(val!.trim())
//     }
//     val = val || ""
//     g()
//     return val.charAt(0)
// }
// // console.log(f("     hello   "))
// console.log(f(null))  // null没有charAt就报错了

// ------------------  联合类型
// ts 类型系统
// 基本类型，class，type，interface    
// interface PrimiryButton{
//     style:"primiry",
//     text:"点击"
// }
// interface DangerButton{
//     style:"danger",
//     text:"登录"
// }
// // Button是联合类型
// type Button = PrimiryButton | DangerButton;
// function f(b:Button){
//     if(b.style=="primiry"){

//     }
//     if(b.style=="danger"){
        
//     }
// }

// ------------------ in 关键字  in的类型保护
// in 判断一个属性是否在一个接口或类中
// interface A{
//     name:string,
//     say():void
// }
// interface B{
//     age:number,
//     jump():void
// }
// function f(c:A|B){
//     if("name" in c){
//         console.log(c)
//     }
//     if("age" in c){
//         console.log(c)
//     }
// }

// ------------------ 自定义的类型保护
interface Dog{
    age:number
}
interface Pig{
    age:number
}
// x is Dog    x现在d   d是Dog  
// x is Dog  true 或者 false
// x.age == 2 true 或者 false
function isDog(x:Dog|Pig):x is Dog{
    console.log("is Dog")
    return x.age == 2;
}
// x:number  x:Dog
function getAnimal(x:Dog|Pig):string{
    // isDog(x) 结果是true或是false
    if(isDog(x)){
        return "dog..."
    }else{
        return "pig..."
    }
}
let d:Dog = {age:100}
console.log(getAnimal(d));

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

export {}






