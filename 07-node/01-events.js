// node是基于事件驱动的  events
let EventEmitter = require("events")
let path = require("path")
// class EventEmitter{
//     constructor(){
//         this._events = {}
//     }
//     on(evenName,callback){
//         if(this._events[evenName]){
//             this._events[evenName].push(callback)
//         }else{
//             this._events[evenName] = [callback]
//         }
//     }
//     emit(eventName){
//         this._events[eventName].forEach(fn=>{
//             fn()
//         })
//     }
// }
let e = new EventEmitter()
e.on("看报纸",function(){
    console.log("正在看报纸1...")
})
e.on("看报纸",function(){
    console.log("正在看报纸2...")
})
e.on("吃饭",function(){
    console.log("正在吃饭...")
})
e.emit("看报纸")
// 这样取消订阅不行
e.off("看报纸",function(){
    console.log("取消订阅")
})
e.emit("看报纸")
// e.emit("吃饭")
// e.emit("看报纸")
// e.emit("看报纸")
// e.emit("看报纸")
// e.emit("看报纸")