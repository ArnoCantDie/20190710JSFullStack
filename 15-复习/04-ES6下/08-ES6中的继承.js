// -------------------- ES6中的继承 
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     say(){
//         console.log("say...")
//     }
// }
// class Dog extends Animal{

// }
// let d = new Dog("wangcai1")
// d.say()
// console.log(d.name)

// -------------------- 
class Animal {
    constructor(name) {
        this.name = name;
    }
    say(){
        console.log("say...")
    }
}
class Dog extends Animal{
    // ReferenceError: Must call super constructor in derived class before accessing 
    constructor(a){
        super(a); // 显示调用父中constructor
        this.age = a;
    }
}
let d = new Dog("wangcai")
console.log(d.name)
// let d = new Dog(111)
// console.log(d.age)


