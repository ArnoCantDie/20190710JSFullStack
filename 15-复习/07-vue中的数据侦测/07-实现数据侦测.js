function updateView() {
    console.log("更新视图成功了...")
}
function observer(obj) {
    // 主要是侦测对象  definedpropty只能观查对象
    if (typeof obj !== "object" || obj == null) {
        return obj
    }
    // 只会遍历一层
    for (let key in obj) {
        definedReactive(obj, key, obj[key])
    }
}

function definedReactive(obj, key, value) {
    observer(value)
    // Object.definedProperty   Proxy 
    Object.defineProperty(obj, key, {
        get() {
            console.log("获取数据成功了...")
            return value;
        },
        set(newValue) {
            if (value !== newValue) {
                observer(newValue)
                value = newValue;
                updateView();
            }
        }
    })
}

let data = { name: {number:666}, age: 110 }
// 当获取和设置number时，需要感知到，数据劫持，数据侦测
observer(data) // 观测数据
// console.log(data.name)
// data.name.number = 888 // 如果数据改变了，需要更新视图
// address 也需要侦测到
data.name = {address:"xxx"} // 给name赋了一个新的对象
