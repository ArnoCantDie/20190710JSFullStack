// ------------------------ 普通的构造器 new
// // 构造器
// function Animal(){  
//     this.type = "狗类"
// }
// // p是一个对象   new一个构造器就创建出一个对象
// let a = new Animal()
// console.log(a.type)

// ---------------------  构造器中的属性
// 构造器中的属性分两类：实例上的属性，公有的属性
// function Person(){
//     // name  叫实例属性
//     this.name = "hello"
// }
// // p1和p1叫实例  实例属性
// let p1 = new Person;
// console.log(p1)
// let p2 = new Person;
// console.log(p2)

// function Person(name){
//     // name  叫实例属性
//     this.name = name
// }
// // p1和p1叫实例  实例属性
// let p1 = new Person("wangcai");
// console.log(p1.name)
// let p2 = new Person("xiaoqiang");
// console.log(p2.name)

// function Person(name){
//     this.name = name
// }
// // 公有属性都是定义在原型上面
// Person.prototype.say = function(){
//     console.log("say...")
// }
// let p1 = new Person("wangcai");
// let p2 = new Person("xiaoqiang");
// p1.say()
// p2.say();

// 在ES5中创建一个对象，对象中有实例属性，有公有属性，实例属性定义在构造器上，公有属性定义在原型上

// -------------------------- hasOwnProperty

// function Person(name){
//     this.name = name;
// }
// Person.prototype.say = function(){
//     console.log("say....")
// }
// let p = new Person("wangcai");
// console.log(p.name)
// // hasOwnProperty 判断实例属性
// console.log(p.hasOwnProperty("name")) // true
// console.log(p.hasOwnProperty("say"))  // false

// ------------------------- 
function Person(name){
    this.name = name;
}
Person.prototype.say = function(){
    console.log("say....")
}
let p = new Person("wangcai")
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__.hasOwnProperty("say")) // true
console.log(p.constructor === p.__proto__.constructor) // true
console.log(Person.prototype.__proto__)
console.log(p)
// p上面有一个实例属性是name







