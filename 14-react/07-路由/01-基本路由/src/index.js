import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router>
    <App />
</Router>
,document.getElementById("app"));

// 路由  react-router-dom(webapp)  react-router-native(nativeapp)

// 安装路由模块：npm i react-router-dom -S

// 分类：基本路由，嵌套路由，动态路由，编程式路由，重定向，Switch

// 基本路由：Router组件，Route组件，Link组件   route.js   router-link   router-view

// 使用步骤：
    // 1，在入口文件导入路由模块
    // 2，把Router组件包在根组件外面
    // 3，使用Route定义规则  App.js
        // <Route path="/" exact component={Home}></Route>
        // <Route path="/list" component={List}></Route>
        // <Route path="/user" component={User}></Route>
    // 4，使用Link组件生成连接