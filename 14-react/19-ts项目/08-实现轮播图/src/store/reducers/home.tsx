import {AnyAction} from "redux"
import *as types from "../action-types"
export interface TypeHome{
    currentCategory:string,
    sliders:Array<Slider>
}
export interface Slider{
    url:string
}
let initialState:TypeHome = {
    currentCategory:"all",
    sliders:[]
}
export default function(state:TypeHome=initialState,action:AnyAction):TypeHome{
    switch(action.type){
        case types.SET_CURRENT_CATEGORY:
            return {...state,currentCategory:action.payload}
        case types.GET_SLIDERS:
            return {...state,sliders:action.payload.data}
        default:
            return state
    }
}



