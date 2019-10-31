import {combineReducers} from "redux"
import counter from "./counter"
import {connectRouter} from "connected-react-router"
// let reducer = combineReducers({
//     counter:counter,
//     router: connectRouter(history),
// })
// export default reducer;

// 如何让history作为一个形参
let createRootRedecer =  history => combineReducers({
    counter,
    router: connectRouter(history),
})
export default createRootRedecer;


// export default (history) => combineReducers({
//   router: connectRouter(history),
// })