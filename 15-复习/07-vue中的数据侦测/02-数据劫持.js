// defineProperty  默认只能劫持对象

// {name:"wangcai",age:110,hobby:{flag:"game"}}

function updateView(){
    console.log("视图更新了.....")
}

// 观察者一个对象
function observer(obj){
    if(typeof obj !== "object" || obj == null){
        return obj;
    }
    for(let key in obj){
        // 实现数据劫持
        defineReactive(obj,key,obj[key])
    }
}
function defineReactive(obj,key,value){
    Object.defineProperty(obj,key,{
        // 精细化设置一个对象的属性 
        get(){
            console.log("获取数据成功...")
            return value
        },
        set(newValue){
            value = newValue
            updateView();
        }
    })
}
let data = {name:"wangcai",age:110}
observer(data)
// console.log(data.name)
data.name = "666"
console.log(data.name)