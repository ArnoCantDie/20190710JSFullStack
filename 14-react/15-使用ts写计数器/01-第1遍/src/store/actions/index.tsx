import { INCRMENT,DECRMENT } from "../action-types"

export interface Increment{
    type: typeof INCRMENT
}
export interface Decrement{
    type: typeof DECRMENT
}
export type Action = Increment|Decrement

export function increment():Increment{
    return {type:INCRMENT}
}
export function decrement():Decrement{
    return {type:DECRMENT}
}