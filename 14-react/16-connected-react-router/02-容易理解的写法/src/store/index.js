import {createStore,applyMiddleware} from "redux"
import reducer from "./reducers"
import history from "./history"
import { routerMiddleware } from 'connected-react-router'
// let store = createStore(reducer);

let store = applyMiddleware(routerMiddleware(history))(createStore)(reducer);

export default store;