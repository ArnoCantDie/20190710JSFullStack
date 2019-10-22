// 同步的action creator
export function increment(){
    return {
        type:"INCREMENT"
    }
}
// 同步的action creator
export function decrement(){
    return {
        type:"DECREMENT"
    }
}
// 如果你使用了redux-thunk中间件，可以让action creator先不返回一个action
// 而是返回一个函数，在函数的内部就可以对异步的action进行增强
// 异步的action creator
export function incrementAsync(){
    return function(dispatch,getState){
        // 在这个函数进行异步操作
        setTimeout(()=>{
            // 调用同步的action
            dispatch(increment());
        },3000);
    }
}

// 定义一个奇数加1的action creator
export function incrementIfOdd(){
    return function(dispatch,getState){
        const {counter} =  getState();
        if(counter%2){
            // 奇数
            dispatch(increment())
        }
    }
}