import * as types from "../action-types"
// 叫actioncreator
function increment(payload){
    return {type:types.ADD1,payload}
}
function decrement(payload){
    return {type:types.SUB1,payload}
}

export default {increment,decrement}