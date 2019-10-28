// ----------------------------------  什么是接口
// 什么是接口   api接口是一个网址
// java和ts中的接口，你可以当你比抽象类还抽象的东西

// 抽象类  类   抽象类不能new  只能让别的类继承
// abstract class Animal{
//     name:string;  // 实例属性
//     say(){  // 实例方法
//         console.log("say....")
//     }
// }

//interface是一个关键字用来定义一个接口 
// 接口中放了很多很多的方法，目的就是为了让别的类去实现我的接口，也就是实现我的方法
// interface Flying{
//     // 仅仅是放一些方法的声明
//     say():void;
// }

// 接口  不是类   也不能new   只能让别的类实现 
// 一个类可以继承一个抽象，可以去实现一个接口
// 一个类只能继承一个类（抽象类），但是可以实现多个接口

// --------------------------------- 使用接口
// 定义抽象类
// abstract class Animal{
//     name:string;
//     jump(){
//         console.log("jump...")
//     }
// }
// // 定义一个接口
// interface Flying{
//     fly():void;
// }
// // 定义一个接口
// interface Eating{
//     eat():void;
// }

// class Bird extends Animal implements Flying,Eating{
//     fly(){
//         console.log("飞啊飞....")
//     }
//     eat(){
//         console.log("吃....")
//     }
// }
// let b = new Bird();
// b.jump();
// b.fly();
// b.eat();

// --------------------------------- 抽象类也可以模拟接口
// 如果一个抽象类中都是抽象方法，它和接口就一样。
// 抽象方法是不能实现
// abstract class Animal{
//     // abstract jump() 抽象方法
//     abstract jump():void;
// }
// class Bird extends Animal{
//     // 如果继子一个抽象，这个抽象类中有抽象方法
//     // 那么就一定要实现这个抽象方法
//     jump(){
//         console.log("jump....")
//     }
// }
// let b = new Bird();
// b.jump();
// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------
// ---------------------------------

export {};