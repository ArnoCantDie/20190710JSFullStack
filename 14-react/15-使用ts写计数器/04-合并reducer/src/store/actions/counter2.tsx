import {INCREMENT2,DECREMENT2} from "../action-types"

export interface Increment{
    type:typeof INCREMENT2
}
export interface Decrement{
    type:typeof DECREMENT2
}

export type Action = Increment|Decrement;

export function increment():Increment{
    return {type:INCREMENT2}
}

export function decrement():Decrement{
    return {type:DECREMENT2}
}





