import {createStore,applyMiddleware} from "redux"
import reducers from "./reducers"
import history from "./history"
import {routerMiddleware} from "connected-react-router"
let router = routerMiddleware(history);
let store = createStore(reducers,applyMiddleware(router))

// let store = applyMiddleware()()();
export default store;