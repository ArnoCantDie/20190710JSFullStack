const arrayProto = Array.prototype;// 得到原型上的方法
const proto = Object.create(arrayProto)  // 复制一份原型上的方法
;['push','shift','pop','splice'].forEach(method=>{
    // console.log(method)
    // 重写'push','shift','pop','splice'
    proto[method] = function(...args){
        // console.log(this)  // [ 1, 2, 3, { age: [Getter/Setter] } ]
        updateView();
        arrayProto[method].call(this,...args)
    }
})
function updateView() {
    console.log("更新视图成功了...")
}
function observer(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj
    }
    if(Array.isArray(obj)){
        // 如果是一个数组要重写数组上原型上的方法 
        Object.setPrototypeOf(obj, proto)
        for(let i=0; i<obj.length; i++){
            let item = obj[i];
            observer(item)
        }
    }else{
        for (let key in obj) {
            definedReactive(obj, key, obj[key])
        }
    }
    
}

function definedReactive(obj, key, value) {
    observer(value)
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




let data = { name:[1,2,3,{age:888}] }
observer(data) 
// 数据改变了
// data.name[3].age = 666;  

// push shift unshift pop 也能改变数组中的数组
data.name.push({address:"xxx"})  // 目的是：更新视图

// 思路：重写Push方法  这些方法在Array的原型上
//       不要把Array原型上的方法直接重写了
//      先把原型上的方法copy一份，去重写（加上视图更新的操作）
//      再去调用最原始的push方法
