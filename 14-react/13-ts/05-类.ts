// --------------------------
// Person是类
// class是关键字，用来声明一个类
// name叫属性  string是指name的类型
// 创建对象需要new一个类  new Person
// class Person{
//     name:string
// }
// p表示一个对象  new出来的
// let p = new Person();

// --------------------------  在类中写构造器
// 声明了一个学生为类
// 当创建完对象后，如何让对象有值 构造器
// 当new对象时，会自动地调用构造器 constructor
// class Stu{
//     name:string;
//     // 当new时，会自动调用constructor
//     constructor(name){
//         // this就表示当前这个类的对象
//         this.name = name;
//     }
// }
// // 创建一个学生对象
// // wangcai就传递给了构造器
// let s = new Stu("wangcai");
// console.log(s.name)

// -------------------------- 再来一遍
// class Animal{
//     name:string; // 当你new了Animal那么每一个对象上面都有一个name的属性
//     constructor(name){
//         // this的指向是不固定的
//         // 始终指向你new出来的那个对象
//         this.name = name
//     }
// }

// let a = new Animal("pig");
// let b = new Animal("cat");
// console.log(a.name)
// console.log(b.name)

// -------------------------- 再来一遍 
// class最终都要new出一个个对象
// class Computer{
//     name:string;
//     constructor(xxx){
//         this.name = xxx;
//     }
// }
// // 在new时，就可以给name赋值，当你new的时，它会调用构造器
// // () 会传递给构造器
// let c = new Computer("tinkpad");
// console.log(c.name)

// --------------------------  三个访问权限符 public  private  protected
// public  所有为都可以访问
// private  只有本类可以访问
// protected  只能在本类或继承这个类的子类中访问
// 访问name，访问器，修改器

// 如果在一个类中，如果这个属性是私有的，一般都以_打头
// class User{
//     private _myname:string;  // _xxx 就表示这个属性是私有
//     constructor(name:string){
//         this._myname = name;
//     }
//     // 访问器 myname是一个函数  对象.myname()
//     public get myname():string{
//         return this._myname;
//     }
// }
// let u1 = new User("张三");
// // 调用访问器 不用加()
// console.log(u1.myname);
// let u2 = new User("李四");

// -------------------------- 再来一遍 
// class Car{
//     name:string;
//     constructor(name){
//         this.name = name;
//     }
// }
// let c = new Car("奔驰");
// console.log(c.name)

// class Car{
//     private name:string;
//     constructor(name){
//         this.name = name;
//     }
// }
// let c = new Car("奔驰");
// console.log(c.name)  // 如果name是私有的，外面是不访问的

// 由于name加上了privide权限，代表外面不能访问，访问器
// class Car{
//     private _name:string;
//     constructor(name){
//         this._name = name;
//     }
//     // 公开的访问器
//     public get name():string{
//         return this._name;
//     }
// }
// let c = new Car("奔驰123");
// console.log(c.name); 

// -------------------------- 修改器
// class Phone{
//     private _name:string;
//     constructor(name){
//         this._name = name;
//     }
//     public get name():string{
//         return this._name;
//     }
//     public set name(newName:string){
//         this._name = newName;
//     }
// }
// let p = new Phone("华为");
// console.log(p.name);
// p.name = "苹果"
// console.log(p.name);
// console.log(p._name);

// -------------------------- 再来一遍 
// 类  类型  自定义的类型 
// class Person{
//     private _name:string;
//     // 构造器
//     constructor(name){
//         this._name = name;
//     }
//     // 访问器
//     public get name():string{
//         return this._name;
//     }
//     // 修改器
//     public set name(newName:string){
//         this._name = newName;
//     }
// }
// // p类型是Person  let a:number = 110;
// let p:Person = new Person("张三");
// console.log(p.name)
// p.name = "张四"
// console.log(p.name)

// -------------------------- 继承 和 三个修饰符
// 父类，基类，xxx  
// 如果是一个基类，我们不想让别人去new这个基类
// 可以把这个类变成抽象类
// 所谓的抽象类，就是不能new的类，完全是让别去继承的
// 也就是说抽象类不能去创建对象
// abstract 就表示把这个类声明成抽象类

// abstract class Animal{
//     // public表示在所有类的类内和类外都能访问
//     public readonly name:string="xxx";
//     // 只能在子类的类内访问
//     protected age:number = 0;
//     // 只能在本类的类内访问
//     private money:number = 0;
// }
// // Dog是子类
// class Dog extends Animal{
//     // Dog中去拿age，Dog内部没有，
//     // 去父类中找
//     public getAge(){
//         console.log(this.age);
//     }
//     public getMon(){
//         // console.log(this.money);
//     }
// }
// let d = new Dog();
// console.log(d.name)
// // 在类外访问 不OK  age只能在Dog的类内访问
// // console.log(d.age);
// d.getAge();
// -------------------------- 继承

// class Animal{
//     name:string;
//     // 构造器就是给类中的属性进行赋值操作
//     constructor(name:string){
//         this.name = name;
//     }
// }
// class Pig extends Animal{
//     age:number;
//     constructor(name,age){
//         // 先调用父类中的构造器
//         super(name);  // 调用父类的构造器
//         this.age = age;
//     }
// }
// let p = new Pig("wangcai",100);
// console.log(p.name)
// console.log(p.age)

// -------------------------- 抽象类
// 父类也是可以new的
// 如果不想让别人去创建父类的对象
// 可以把这个父类声明成抽象类
// abstract class Animal{
//     name:string;
//     // 构造器就是给类中的属性进行赋值操作
//     constructor(name:string){
//         this.name = name;
//     }
// }
// 抽象类是不能new的
// let a = new Animal("小强")
// console.log(a.name)
// class Pig extends Animal{
//     age:number;
//     constructor(name,age){
//         // 先调用父类中的构造器
//         super(name);  // 调用父类的构造器
//         this.age = age;
//     }
// }
// let p = new Pig("wangcai",100);
// console.log(p.name)
// console.log(p.age)
// -------------------------- 静态属性
// class Animal{
//     // 在Animal中声明的属性默认情况下都是实例属性
//     public name:string; // 实例属性  实例就是对象的意思
//     constructor(name:string){
//         this.name = name;
//     }
// }
// // a是对象，也叫实例 
// let a = new Animal("wangcai");
// console.log(a.name)

// class Animal{
//     public name:string;   // 实例属性
//     // 静态属性不属于某个实例，属于当前这个类
//     // 不能通过对象.age来获取age
//     static age:number = 666;  // 静态属性
//     constructor(name:string){
//         this.name = name;
//     }
// }
// let a = new Animal("wangcai");
// console.log(a.name)
// 静态属性需要通过类名来获取
// console.log(Animal.age)
// console.log(a.age)
// --------------------------  静态方法
// class Animal{
//     // f1就是一个静态方法
//     static f1(){
//         console.log("....")
//     }
// }
// let a = new Animal();
// // a.f1(); // 由于f1是静态访问，只能通过类名来调用
// Animal.f1();
// --------------------------

// 总结：
//    1，基本使用
//    2，构造器，用来给类中的属性赋值
//    3，访问器，如果一个类的属性是私有的，外面的不能访问，可以提供一个访问器，可以到达访问类中私有属性的目的
//    4，修改器，去修改类中的某个属性 
//    5，readonly，表示类中这个属性是只读，不能修改
//    6，继承   父类   子类   子类去继承父中的属性和方法
//    7，抽象类    抽象类就是为了让别人继承  不能new 
//    8，静态方法和静态属性   只能类来调用，不能通过对象来调用
//    9，权限修饰符 public  protected   private



// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------
// --------------------------

export {};