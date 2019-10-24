import * as types from "../action-types"
// 叫同步的actioncreator
function increment(payload){
    return {type:types.ADD1,payload}
}
function decrement(payload){
    return {type:types.SUB1,payload}
}
// 如果你的actioncreator中有异步代码，这个actioncreator通常叫异步的actioncreator
// 异步的actioncreator最终还要调用同步的actioncreator
// dispath只能派发一个对象（action）  dispatch不能爬发一个函数
// 我们需要对dispath进行增强
// 需要靠reudx中的中间件对dispatch进行增强
function incrementAfterThree(){
    // 如果你return了一个函数，最后实现加的操作，还是需要调用actioncreator中的同步的incremnt
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment(100))
        },3000)
    }
}

export default {increment,decrement,incrementAfterThree}