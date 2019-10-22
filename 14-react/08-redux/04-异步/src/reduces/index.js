// 把多个管理合并成一个管理员
import {combineReducers} from "redux"
import counter from "./counter"
import films from "./films"

// reducer表示把多个reducer合并成一个reducer
const reducer = combineReducers({
    counter,
    films
})

export default reducer;