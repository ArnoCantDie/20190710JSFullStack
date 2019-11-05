// Set 里面存储任何东西  里面的数据是唯一

// 创建一个Set
// let set = new Set(); // 空的Set
// console.log(set)  // Set {}

// 创建一个有内容的Set 
// let s = new Set([1,2,3])
// console.log(s)  // Set { 1, 2, 3 }

// 创建一个存储任何值的Set
// let s = new Set([1,2,true,"hello",undefined,null,function(){}])
// console.log(s)  // Set { 1, 2, true, 'hello', undefined, null, [Function] }

// // Set中不能存储相同的值
// let s = new Set([1,2,3,1,2,3])
// console.log(s) // Set { 1, 2, 3 }

// 快速去掉一个数组中相同的值
// let arr = [1,2,3,2,4,2];
// let s = new Set(arr)
// console.log(s)  // Set { 1, 2, 3, 4 }

// Set中的api
// let s = new Set([1,2,3])
// s.add(8)
// console.log(s)  // Set { 1, 2, 3, 8 }
// s.delete(2)
// console.log(s)  // Set { 1, 3, 8 }
// s.clear();
// console.log(s)  // Set {}

// 遍历一个Set
let s = new Set(["a","b","c"])
// s.forEach(item=>console.log(item)) // 1 2 3
console.log(s.entries())  // [Set Iterator] { 'a', 'b', 'c' }

// for(value of s.entries()){
//     console.log(value)
// }


