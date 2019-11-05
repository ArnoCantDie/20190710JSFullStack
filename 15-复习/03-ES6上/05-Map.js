// JS的集合： []   {}   Set   Map

// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

// 创建空的Map
// let map = new Map();
// console.log(map)  // Map {}

// 创建一个有内容的Map  []需要放键值  这里的键值对还是以数组形式来放
// let map = new Map([1,2,3]);
// console.log(map)  // Iterator value 1 is not an entry object

// 创建一个有内容的Map
// let map = new Map([["name","wangcai"],["age",100]]);
// console.log(map) // Map { 'name' => 'wangcai', 'age' => 100 }

// Map中的api和Set中的Api差不多
// let map = new Map([["name","wangcai"],["age",100]]);
// console.log(map.get("age"))
// map.set("name","xiaoqiang")  // Map { 'name' => 'xiaoqiang', 'age' => 100 }
// console.log(map)

// let map = new Map([["name","wangcai"],["age",100]]);
// map.set("hello","ok")
// console.log(map)  // Map { 'name' => 'wangcai', 'age' => 100, 'hello' => 'ok' }


// let map = new Map([["name","wangcai"],["age",100]]);
// map.set({address:"bj"},"ok")
// console.log(map)  // Map { 'name' => 'wangcai', 'age' => 100, { address: 'bj' } => 'ok' }

// let map = new Map([["name","wangcai"],["age",100]]);
// let obj = {address:1}
// map.set(obj,666)
// console.log(map)  // Map { 'name' => 'wangcai', 'age' => 100, { address: 1 } => 666 }

// 内存泄露
// let map = new Map([["name","wangcai"],["age",100]]);
// let obj = {address:1}
// map.set(obj,666)
// obj = null
// console.log(map) // Map { 'name' => 'wangcai', 'age' => 100, { address: 1 } => 666 }


class Dog{} 
let dog = new Dog();
let map = new Map([["name","wangcai"],["age",100]]);
map.set(dog,666)
console.log(map) // Map { 'name' => 'wangcai', 'age' => 100, Dog {} => 666 }
dog = null
console.log(map) // Map { 'name' => 'wangcai', 'age' => 100, Dog {} => 666 }

/* <script>
    class Dog { }
    let dog = new Dog();
    // WeakMap 键必须是对象
    let map = new WeakMap();
    map.set(dog, 666)
    console.log(map) // WeakMap {Dog => 666}
    dog = null;
    console.log(map) // WeakMap {Dog => 666}
</script> */




