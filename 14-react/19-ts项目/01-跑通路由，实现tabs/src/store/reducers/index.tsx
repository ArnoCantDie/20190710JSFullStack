import {combineReducers,ReducersMapObject} from "redux"
import {connectRouter} from "connected-react-router"
import history from "../history"
import home from "./home"
// 把所有的reducer放到一个对象中
let reducers:ReducersMapObject = {
    home,
    router:connectRouter(history)
}
// TypeRootState 仅仅是一个类型，是一个包含所有reducer的类型
type TypeRootState = {
    [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}
let reducer = combineReducers(reducers);

// 导出一个对象，对象中了一个类型
export {TypeRootState}
export default reducer;
