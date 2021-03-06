// for of是用来循环的，使用forof必须要求你循环的对象有一个iterator
// 如果一个对象有一个iterator，那么这个对象就是iterable对象
// 如果是一个iterable对象，说明这个对象可以被迭代
// 在js中，数组,set,map都是iterable对象，可以使用forof进行迭代

// let colors = ["red","green","blue"];
// // console.dir(colors)
// for(value of colors){
//     console.log(value)
// }
// 要使用for of前提是这个集合是可迭代。

// ---------------------------- 
// 伪数组是一个对象
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// // ... 把上面的每一项都迭代出来
// let realArray = [...obj] // obj is not iterable
// console.log(Array.isArray(realArray))

// -------------------------  Array.from
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// // Array.from 可以把一个不是iterable的伪数组变成真实数据
// let realArray = Array.from(obj)
// console.log(realArray)  // [ 'a', 'b' ]
// console.log(Array.isArray(realArray))  // true

// ---------------------------- Array.from
let obj = {
    0:"a",
    1:"b",
    [Symbol.iterator](){  // 让Obj是可迭代的
        let index = 0;
        return {
            next:()=>{
                return {
                    value:this[index],
                    done:this.length === index++
                }
            }
        }
    },
    length:2
}
let realArray = [...obj] // Result of the Symbol.iterator method is not an object
console.log(realArray) //[ 'a', 'b' ]
console.log(Array.isArray(realArray))  // true

