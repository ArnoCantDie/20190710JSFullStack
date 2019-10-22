// let arr = ["A","B","C","D","E","F"];
// // 2表示从哪开始（索引）
// // 1表示删除多少个
// // newArr删除的元素（数组）
// let newArr = arr.splice(2,1)
// console.log(newArr)  // [ 'C' ]

// let arr = ["A","B","C","D","E","F"];
// let index = arr.findIndex(function(t){
//     // console.log(t)
//     return t=="C"
// })
// console.log(index)  // 2

let arr = ["A","B","C","D","E","F"];
let index = arr.findIndex(t=>t=="C")
console.log(index)  // 2