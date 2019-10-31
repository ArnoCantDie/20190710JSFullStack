import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <Counter1></Counter1>
        <hr/>
        <Counter2></Counter2>
    </Provider>
    ,document.getElementById('root'));