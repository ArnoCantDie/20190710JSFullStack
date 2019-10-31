import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import reducers from "./reducers"
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
let persistedReducer = persistReducer(persistConfig,reducers);

let store = createStore(persistedReducer)

let persistor = persistStore(store)


export default { store, persistor };