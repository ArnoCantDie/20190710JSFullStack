import {createStore,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import reducer from "./reducers"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// redux最最最核心的就是仓库   需要给仓库配一个管理员
// 去仓库一个带有中间件的仓库
let store = createStoreWithMiddleware(reducer);

export default store;