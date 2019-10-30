import { Store } from '../types';
import * as types from "../action-types"
import { Action } from '../actions';
// state是状态 {number}
// action是 { type }
export default function(state:Store={number:1},action:Action):Store{
    switch(action.type){
        case types.INCREMENT:
            return {...state,number:state.number+1}
        case types.DECREMENT:
            return {...state,number:state.number-1}
        default:
            return state;
    }
}
