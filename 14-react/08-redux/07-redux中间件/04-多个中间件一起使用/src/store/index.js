import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducers"

import reduxThunk from "redux-thunk"
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise';
const logger = createLogger({
});
let arr = [reduxThunk,logger,promiseMiddleware];
const store = createStore(
    reducer,
    compose(applyMiddleware(...arr))
  )
// let store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

export default store;