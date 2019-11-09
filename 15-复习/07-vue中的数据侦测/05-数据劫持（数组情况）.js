function updateView() {
    console.log("视图更新了.....")
}


function observer(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    if(Array.isArray(obj)){
        // obj是一个数组
        // console.log(obj)  // [ 1, 2, 3 ]
        for(let i=0; i<obj.length;i++){
            let item = obj[i]
            // item有可能是一个普通的元素，也有可能是一个对象
            observer(item)  //观Item
        }
    }else{
        for (let key in obj) {
            defineReactive(obj, key, obj[key])
        }
    }
}
function defineReactive(obj, key, value) {
    observer(value)  // value可以是多层
    Object.defineProperty(obj, key, {
        get() {
            console.log("获取数据成功...")
            return value
        },
        set(newValue) {
            if (value !== newValue) {
                observer(newValue)
                value = newValue  // newValue是一个新的对象，也会被侦测到
                updateView();
            }
        }
    })
}

// 得到数组原型上的方法
let arrayProto = Array.prototype;
// 没有直接在原型方法上操作
// 继承了一份，在继承的这一份上面的去修改


// let data = {number:1}
// observer(data)
// console.log(data.number)
// data.number = 111;

// let data = {number:[{name:"wangcai"}]}
// observer(data)
// // console.log(data.number[0].name)
// data.number[0].name = "xq"  // 修改数据 

// 数组中还可以通过push，unshift向数组中添加元素
// push了，数组中的数据改了，视图也要更新
// let data = {number:[{name:"wangcai"}]}
// observer(data)
// // push完后，视图也是更新
// data.number.push({age:110})



// let data = { name: [{counter:"xxx"}] }
// observer(data)
// // data.name = "xx" // 之前是这样改变数据的

// data.name.push({age:110})//
// // { name: [ 1, 2, 3, { counter: 'xxx' }, { age: 110 } ] }
// // console.log(data)
// // data.name[4].age = 666;
// // console.log(data)


