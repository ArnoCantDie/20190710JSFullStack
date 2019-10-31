// ------------------- keyof   得到key 

// interface Person{
//     name:string,
//     age:number
// }


// type PersonKey = keyof Person;

// function getValueByKey(p:Person,key:PersonKey){
//     return p[key]
// }
// let val = getValueByKey({name:"wangcai",age:100},"age")
// console.log(val)

// -------------------- 映射类型  in
// interface Person{
//     name:string,
//     age:number,
//     address:string
// }
// // type Dome = {
// //     [Key in keyof Person]:Person[Key]
// // }
// type K = keyof Person;  // K "name"|"age"|"address"
// let a:K = "name"
// console.log()

// ----------------------  In如何用？
// interface Pig{
//     name:string
// }
// interface Dog{
//     age:number
// }
// function getDemo(x:Pig|Dog){
//     if("name" in x){
//         console.log("x是Pig")
//     }else{
//         console.log("x是Dog")
//     }
    
// }
// let p:Pig = {name:"wangcai"}
// getDemo(p)
// ----------------------  

// interface Person{
//     name:string,
//     age:number,
//     address:string,
//     score:number
// }
// type Dome = {
//     // 在定义类型时，使用inr操作符去批量定义类型中的属性
//     // [Key in "name"|"age"|"score"]:Person[Key]
//     name:string,
//     age:number
// }
// let p:Dome = {name:"wagncai",age:123,score:100};

// ------------------- type的使用
// type Dome = {name:string,age:number}
// let obj:Dome = {name:"wangcai",age:100};

// ------------------- 定义一个类型，这个类型中有1000个属性
// interface Person{
//     name:string,
//     age:number,
//     score:number
// }
// type Dome = {
//     [Key in keyof Person]:Person[Key]
//     // [Key in "name"|"age"]:Person[Key]
// }
// let p:Dome = {name:"wangcai",age:1000,score:11}

// ------------------------ 
// interface Person{
//     name:string,
//     age:number,
//     score:number
// }
// 批量定义属性
// type Dome<T> = {
//     [key in keyof T]:T[key]
// }
// let p:Dome<Person>;

// ------------------------ 

// keyof 得到 所有的集合所有的属性
// 批量定义属性  [key in keyof T]:T[key]

// ---------------------- ReturnType 
function getUser(){
    return {name:"wangcai",age:100}
}
// 把getUser的返回值类型给了UserInfo;
// type UserInfo = {name:string,age:number}
type UserInfo = ReturnType<typeof getUser>;

let p:UserInfo = {name:"w",age:1};


export {}



























