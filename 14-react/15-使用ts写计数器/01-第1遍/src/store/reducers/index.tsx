import * as types from "../action-types"
import {Store} from "../types"
import {Action} from "../actions"

export default function(state:Store={number:0},action:Action){
    switch(action.type){
        case types.INCRMENT:
            return {...state,number:state.number+1}
        case types.DECRMENT:
            return {...state,number:state.number-1}
        default:
            return state
    }
}











