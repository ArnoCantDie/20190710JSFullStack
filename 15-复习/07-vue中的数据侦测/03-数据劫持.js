
function updateView() {
    console.log("视图更新了.....")
}
function observer(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    // 默认只是遍历一层
    for (let key in obj) {
        defineReactive(obj, key, obj[key])
    }
}
// 实现数据劫持
function defineReactive(obj, key, value) {
    // 实现递归监控数据的变化
    // 只有用到递归，性能不好   vue3.0   proxy
    observer(value)  // 有可能value还是一个对象，继续观察
    Object.defineProperty(obj, key, {
        get() {
            console.log("获取数据成功...")
            return value
        },
        set(newValue) {
            if (value !== newValue) {
                value = newValue
                updateView();
            }
        }
    })
}
// 如果name的值是一个对象，还需要去劫持这个对象中的属性
let data = { name: {abc:"hello"}, age: 110 }
observer(data)
// data.name.abc = "123"
console.log(data.name.abc )