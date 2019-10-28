// -----------------------

// 类型断言
let name:number|string|null;
// name = "hello";
// console.log(name.length)
// name = 110;
// console.log(name);
// console.log(name.toFixed(2));  // 110.00
// 断言 强行告诉ts是什么类型
name = "hello";
console.log((name as string).length);

// let str:any = "hello";
// console.log(str.length)  // 自动推断  为什么str是一个any类型，为什么会有length，因为，编译器它会自动推断出str是string
// 不需要编译器自动推断了，我直接告诉编译器它的类型，让编译器少了一步自动推断的过程
// console.log((<string>str).length)  // 5  // 手动推断什么类型然后告诉编译器

// <string> 自动推断有两种形式：<>  as

// -----------------------
// let x = "hello";
// console.log(x);
// // . 只有对象才能. 
// console.log(x.toLocaleUpperCase());  // 内部会自动推断类型（自动装箱，包装成一个对象类型）
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------





export {};
