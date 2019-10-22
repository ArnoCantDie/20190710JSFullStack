import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router>
    <App />
</Router>
,document.getElementById("app"));


// 使用编程式路由中的push有问题：
// onClick={()=>history.push("/detail/1")  不会自动跳转过去，需要强制刷新


// 总结：编程式路由方案有多种，先说一种，叫history
// 步骤：
    // 1，import { createBrowserHistory } from 'history';
    // 2，创建history let history = createBrowserHistory()
    // 3，使用history history.go(-1)    his.push("/xxx")  push时需要强制刷新