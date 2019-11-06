// --------------------------- ES5中模拟TS中的抽象类 
// function Animal(){
//     // console.log(new.target) // [Function: Animal]
//     if(new.target === Animal){
//         throw new Error("不是一个抽象类，不能new...")
//     }
//     this.type = "狗类"
// }
// Animal.prototype.eat = function(){
//     console.log("eat...")
// }

// 可以把Animal当成一个抽象类，不能new的类
// let a = new Animal;
// console.log(a.type)

// ------------------------- 继承实例属性 
// function Animal(){
//     if(new.target === Animal){
//         throw new Error("不是一个抽象类，不能new...")
//     }
//     this.type = "狗类"
// }
// Animal.prototype.eat = function(){
//     console.log("eat...")
// }
// function Dog(){
//     // 让Dog类继承Animal类
//     // 继承就是继承别人的属性（实例属性，公有属性）
//     // 如何继承实例属性？this表示当前实例
//     Animal.call(this); // 继承实例如何
// }
// let wangcai = new Dog(); 
// console.log(wangcai.type)  // 狗类

// ------------------------------继承公有属性
function Animal(){
    if(new.target === Animal){
        throw new Error("不是一个抽象类，不能new...")
    }
    this.type = "狗类"
}
Animal.prototype.eat = function(){
    console.log("eat...")
}
function Dog(){
    Animal.call(this);
}
// Dog.prototype = Animal.prototype // 继承公有属性
// Dog.prototype.__proto__ = Animal.prototype // 继承公有属性 say

// 继承
// Object.setPrototypeOf(Dog.prototype,Animal.prototype)

// 继承
Dog.prototype = Object.create(Animal.prototype)

let wangcai = new Dog(); 
console.log(wangcai.type) 
wangcai.eat();

// 继承实例属性：Animal.call(this);
// 继承公有属性：  constructor容易出问题
//    Dog.prototype = Animal.prototype
//    Dog.prototype.__proto__ = Animal.prototype
//    Object.setPrototypeOf(Dog.prototype,Animal.prototype)
//    Dog.prototype = Object.create(Animal.prototype)











