import counter1 from "./counter1"
import counter2 from "./counter2"
import {combineReducers} from "redux"
// combineReducer是把两个reducer合并成一个reducer
// 因为只能给仓库指定一个reducer
// 为什么要写多个reducer:因为，状态非常多，交给不同的reducer管理不同的状态
// reducer是一个函数 内部有一个switch case 

// counter1   当你调用reducer时，reducer最后给你返回一个新状态
// counter1   {n1:100}
// counter2   {n2:200}
// counter   {n1:100,n2:200}

// 一个reducer是一个函数  
let reducer = combineReducers({
    counter1,
    counter2
})

export default reducer;

// import * as types from "../action-types"
// // action 此时里面包含了type和payload
// export default function reducer(state={number:99},action){
//     switch (action.type) {
//         case types.ADD:
//             return { number: state.number + action.payload }
//         case types.SUB:
//             return { number: state.number - action.payload }
//         default:
//             return state;
//     }
// }