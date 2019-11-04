import {AnyAction} from "redux"
export interface TypeMime{
}
let initialState:TypeMime = {
}
export default function(state:TypeMime=initialState,action:AnyAction):TypeMime{
    switch(action.type){
        default:
            return state
    }
}



