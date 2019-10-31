import {combineReducers} from "redux"
import counter1 from "./counter1"
import counter2 from "./counter2"
import history from "../history"
import {connectRouter} from "connected-react-router"
let reducers =  combineReducers({
    counter1,
    counter2,
    router:connectRouter(history)
})

export default reducers;