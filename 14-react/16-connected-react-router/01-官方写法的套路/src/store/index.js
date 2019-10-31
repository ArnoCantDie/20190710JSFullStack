import {createStore,applyMiddleware} from "redux"
import {createHashHistory} from "history"
import createRootRedecer from "./reducer"
import { routerMiddleware } from "connected-react-router"
// let store = createStore(
//     createRootRedecer(history), // 合并之后的reducer
//     applyMiddleware(routerMiddleware(history))
// )

export const  history = createHashHistory();

export default function configureStore(preloadedState){
    let store = applyMiddleware(
        routerMiddleware(history))(createStore)
        (createRootRedecer(history),preloadedState);
    return store;
}

// export default store;