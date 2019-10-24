import {createStore} from "redux"
import reducer from "./reducers"

// redux最最最核心的就是仓库   需要给仓库配一个管理员
let store = createStore(reducer);

export default store;