// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// 交集：[3,4]  并集：[1,2,3,4,5,6]
// 差集：arr1-arr2:[1,2]  arr2-arr1:[5,6]

// ---------------------------------  并集 
// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// 并集
// function union(arr1,arr2){
//     // let s1 = new Set(arr1)
//     // let s2 = new Set(arr2)
//     // let s = new Set([...s1,...s2])
//     // return [...s]

//     let s = new Set([...arr1,...arr2])
//     return [...s]
// }
// console.log(union(arr1,arr2)) // [1,2,3,4,5,6]

// --------------------------- 交集 [3,4]
// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// // map reduce filter some every forEach
// function intersection(arr1,arr2){
//     let s1 = new Set(arr1)  // [1,2,3,4]
//     let s2 = new Set(arr2)
//     return [...s1].filter(item=>{
//         return s2.has(item)
//     })
// }
// console.log(intersection(arr1,arr2))  // [ 3, 4 ]

// ----------------------------  差集
// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]
// function difference(arr1,arr2){
//     let s1 = new Set(arr1)  
//     let s2 = new Set(arr2)
//     return [...s1].filter(item=>{
//         return !s2.has(item)
//     })
// }
// console.log(difference(arr1,arr2)) // [1,2]




