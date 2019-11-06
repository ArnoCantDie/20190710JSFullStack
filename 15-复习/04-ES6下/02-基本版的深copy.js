function deepClone(obj){
    if(obj == null) return obj;
    if(typeof obj !== "object") return obj; 
    if(obj instanceof Date) return new Date(obj); 
    let newObj =  new obj.constructor
    for(let key in obj){
        newObj[key] = obj[key]
    }
    return newObj

}
let obj = [1,2,3]
let newObj = deepClone(obj)
console.log(newObj)  // [ 1, 2, 3 ]
newObj[0] = 6666;
console.log(obj)
console.log(newObj)

// let a = {name:"wangcai",age:1000}
// let a = ["a","b","c"]
// for(key in a){
//     console.log(key)
//     console.log(a[key])
// }
