// 解构赋值   解开  结构   赋值
// let x = ["a","b","c"] // 赋值
// let [a,b,c] = [1,2,3] // 赋值
// console.log(a,b,c) // 1,2,3

// let [,b,c] = [1,2,3]
// console.log(b,c)// 2,3

// ...args 剩余运算符  
// let [a,...args] = [1,2,3];
// console.log(a,args)

// 展开运算符
// let arr = [1,2,3];
// let newArr = [...arr]
// console.log(newArr) // 1,2,3

// let {a,b,c} = [1,2,3]; // 结构不一样
// console.log(a,b,c)

// 解构赋值，可以得到隐藏的属性，两侧的结构可以不一样
// let {length} = [1,2,3];
// console.log(length) // 

// 如果是对象，解构赋值要保证key一样
// let {a,b} = {name:"wangcai",age:100};
// console.log(a) // undefiend
// console.log(b) // undefiend

// let {name,age} = {name:"wangcai",age:100};
// console.log(name) 
// console.log(age) 

// 给key起别名
let {name:a,age:b} = {name:"wangcai",age:100};
console.log(a) 
console.log(b) 


