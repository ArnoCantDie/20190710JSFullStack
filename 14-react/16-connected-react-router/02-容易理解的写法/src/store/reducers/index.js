import {combineReducers} from "redux"
import history from "../history"
import {connectRouter} from "connected-react-router"
import counter from "./counter"

let reducer = combineReducers({
    router:connectRouter(history),
    counter
})

export default reducer