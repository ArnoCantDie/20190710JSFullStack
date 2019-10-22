import {createStore} from "redux"
import reducer from "../reduces/"

// 初始化状态
const state = {
    counter:99
}

// 创建一个仓库，直接可以把一个状态放到仓库中
const store = createStore(reducer, state);

// 导出仓库
export default store;