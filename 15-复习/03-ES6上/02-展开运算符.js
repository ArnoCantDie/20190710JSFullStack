// let a = [1,2,3]
// let b = [...a] // ...是展开运算符
// console.log(b)

// 浅copy  copy完后两者还有关系
// 深copy  copy完后两者没有关系
// ...展开运算符  在展开基本数据类型时，是深copy
// let a = [1,2,3]
// let b = [...a]
// b[0] = 666;
// console.log(b) // [ 666, 2, 3 ]
// console.log(a) // [ 1, 2, 3 ]
// console.log(a === b) // false

// 如果使用展开运算符 展开一个对象时，那么是浅copy
// let obj = {name:"wangcai"}
// let arr = [obj,2,3] 
// let newArr = [...arr]
// console.log(arr)  // [ { name: 'wangcai' }, 2, 3 ]
// console.log(newArr)  //[ { name: 'wangcai' }, 2, 3 ]
// newArr[0].name = "xiaoqiang";
// console.log(arr)  // [ { name: 'xiaoqiang' }, 2, 3 ]
// console.log(newArr)  // [ { name: 'xiaoqiang' }, 2, 3 ]

// slice如果数组中是基本数据类型，slice深copy
// let arr = [1,2,3]
// let newArr = arr.slice(0)
// newArr[0] = 666;
// console.log(arr)
// console.log(newArr)

// 如果数组中有对象，slice就是浅copy
// let obj = {name:"wangcai"}
// let arr = [obj,2,3] 
// let newArr = arr.slice(0) // 得到一个剪切后的新数组
// console.log(arr)
// console.log(newArr)
// newArr[0].name = "lalala";
// console.log(arr)
// console.log(newArr)

// 展开对象 对象就一层，是深copy
// let obj = {name:"wangcai",age:100}
// let newObj = {...obj}
// console.log(obj)
// console.log(newObj)
// newObj.name = "hahaha"
// console.log(obj)
// console.log(newObj)

// 展开对象 对象是多层，是浅copy
// let obj = {name:"wangcai",age:{number:100}}
// let newObj = {...obj}
// console.log(obj)
// console.log(newObj)
// newObj.age.number = 666
// console.log(obj)
// console.log(newObj)

// 实现多层对象的深copy
// let obj = {name:"wangcai",age:{number:100}}
// let newObj = {...obj,age:{...obj.age}}
// newObj.age.number = 666
// console.log(obj) // { name: 'wangcai', age: { number: 100 } }
// console.log(newObj) // { name: 'wangcai', age: { number: 666 } }

// 通过 JSON.parse(JSON.stringify(obj))可以实现深copy
// let obj = {name:"wangcai",age:{number:100}}
// let str = JSON.stringify(obj)
// let newObj = JSON.parse(str)
// console.log(newObj)
// obj.age.number = 1000000;
// console.log(obj)
// console.log(newObj)

// 利用JSON.parse(JSON.stringify(obj))实现深copy的不足
// JSON.parse(JSON.stringify(obj)) 只能copy符合json格式的数据
// let obj = {name:"wangcai",age:function(){}}
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj)  // { name: 'wangcai' }




