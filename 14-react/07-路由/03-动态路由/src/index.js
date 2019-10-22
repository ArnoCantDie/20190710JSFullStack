import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router>
    <App />
</Router>
,document.getElementById("app"));

// 动态路由：传入不同的ID，显示不同的内容