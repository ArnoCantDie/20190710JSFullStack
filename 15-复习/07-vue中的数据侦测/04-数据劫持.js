
function updateView() {
    console.log("视图更新了.....")
}
function observer(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    for (let key in obj) {
        defineReactive(obj, key, obj[key])
    }
}
function defineReactive(obj, key, value) {
    observer(value)  
    Object.defineProperty(obj, key, {
        get() {
            console.log("获取数据成功...")
            return value
        },
        set(newValue) {
            if (value !== newValue) {
                // 有可能newValue是一个对象
                observer(newValue)
                value = newValue
                updateView();
            }
        }
    })
}
let data = { name: "wangcai", age: 110 }
observer(data)

// data.name = "xxxx"
// console.log(data.name)

// 赋一个新的对象给name，是不能观察到abc属性
data.name = {abc:"hello"}
console.log(data.name.abc)

// defineProperty 如果对象中没有属性，是劫持不到的  proxy
// console.log(data.abc)

// 还需要考虑一下数组  