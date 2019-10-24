import {createStore,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise';
import reducer from "./reducers"

// const createStoreWithMiddleware = applyMiddleware(createLogger)(createStore);
// let store = createStoreWithMiddleware(reducer);

const logger = createLogger({
    // ...options
});

// 单个使用redux-logger这个中间件
// let store = applyMiddleware(logger)(createStore)(reducer)

// 单个使用redux-thunk这个中间件
// let store = applyMiddleware(reduxThunk)(createStore)(reducer)

// 单个使用redux-promise这个中间件  redux-promise也可以处理异步
let store = applyMiddleware(promiseMiddleware)(createStore)(reducer)


export default store;