function deepClone(obj) {
    if (obj == null) return obj;
    if (typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj);
    let newObj = new obj.constructor
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  // 不去copy原型链上的属性
            // 使用递归实现深copy
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj

}
// let obj = [1,2,3]
// 当多层时，还是浅copy
let obj = { name: "wangcai", age: { counter: 100 } }
let newObj = deepClone(obj)
obj.age.counter = 6666
console.log(obj)
console.log(newObj)

// let a = {name:"wangcai",age:1000}
// console.log(a.hasOwnProperty("name"))  // true

// hasOwnProperty 不能取到原型链上的属性
// let a = {name:"wangcai",age:1000}
// console.log(a.hasOwnProperty("toString"))  // false
