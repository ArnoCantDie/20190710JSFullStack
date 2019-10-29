typescript  写js的新的语法

安装ts编译器：npm i -g typescript 

---------------- 复习 -------------
typescript   

ts是js框架？错
ts一门一新的编程语言。

js ts和联系区别？
在发明ts时，它专门针对js不足

let a = 110;
function f(a,b,c){
    return a+b+c
}

a = 1;
b = "hello"

#include<stdio.h>

void main(){
    int a = 110;
    float b = 2.14;
    char c = 'a';
    double d = 3.13124235423;
    print("%d",a)
}

ts是js的超集  ts里面包含js 
ts js开发企业型应用 
vscode angular vue3 react16 

ts---->对数据加类型限制   java  C++  C  

public static void main(){

    System.out.println("hello world")
}

print("Hello"); 人工智能 

ts  npm i typescript -g 
tsc 1.ts  ----> 1.js  

数据类型
let n:number = 110;
let s:string = "hello";
let b:boolean = true;

class Animal{}
let a:Animal;
interface Person{}
let b:Person;

数据类型：string,number,boolean,Array,tuple,enum,null,undefiend,any,void,never

let c:any

let wc:[string,number] = ["wangcai",100]
SEX 是枚举类型
enum SEX{
    MAM,
    WOMAN
}
使用枚举中的数据
SEX.MAN ---> 0

----- 类型的自动推导（装箱）
let str:string = "hello" 
str.length
str.tuUpperCase()

----- 类型断言
let name:string|number
name.legth();

------------------------------  函数
函数定义：
function hello(name:string):void{
    console.log(name)
}
hello("wangcai");

------------------------------  类 
js  构造器
function Person(){
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log("say...")
}
let p1 = new Person();
let p2 = new Person();

ES6中提供了class概念，仅仅是语法糖

class Person{

}

继承  

------------------------------  函数
------------------------------  函数
------------------------------  函数






