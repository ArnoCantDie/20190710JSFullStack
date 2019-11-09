let arrayProto = Array.prototype; // 把原型上的方法先保存起来
let proto = Object.create(arrayProto);
["push","shift","splice"].forEach(method=>{
    proto[method] = function(...args){
        updateView()
        arrayProto[method].call(this,...args)
    }
})
function updateView() {
    console.log("视图更新了.....")
}
function ArrayObserver(obj){
    for(let i=0; i<obj.length;i++){
        let item = obj[i]
        observer(item)  //观Item
    }
}
function observer(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    if(Array.isArray(obj)){
        Object.setPrototypeOf(obj,proto)
        ArrayObserver(obj)
    }else{
        for (let key in obj) {
            defineReactive(obj, key, obj[key])
        }
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
                observer(newValue)
                value = newValue  
                updateView();
            }
        }
    })
}


let data = {number:[{name:"wangcai"}]}
observer(data)
data.number.shift({age:110})
