// 深copy  []   {}
function deepClone(obj){
    // 去掉一些特殊情况
    if(obj == null) return obj; // 去掉null undefined
    if(typeof obj !== "object") return obj; // 去掉number boolean stirng
    if(obj instanceof Date) return new Date(obj); // 去掉日期对象
    //  obj还可以是其它值  正则
    // {}  [] 是Object 
    // console.log(obj)  // { name: 'wangcai', age: 100 }  [ 1, 2, 3 ]
    // Object Array   constructor
    // console.log(obj.constructor)  // [Function: Array]
    // console.log(obj.constructor)  // [Function: Object]
    let newObj =  new obj.constructor
    // todo... 
    console.log(newObj) // {}  //[]
    // return newObj

}
// let obj = {name:"wangcai",age:100}
let obj = [1,2,3]
let newObj = deepClone(obj)
// obj和newObj是没有关系
// obj = 123  obj = null  obj = function(){}
// obj = new Data()  

// let a;
// let b = null;
// console.log(a == b)

// let a = {};
// console.log(typeof a)
