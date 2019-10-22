import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router>
    <App />
</Router>
,document.getElementById("app"));


// 重定向  Redirect组件
// <Redirect from="/user" to="/login"></Redirect>
// 在使用重定向组件时，需要配合Switch组件
// Switch组件表示，当上面的路径匹配到了，就不会向下匹配了

// 总结：
// 路由分基本路由，嵌套路由，动态路由，编程式路由，重定向
// 基本路由：
//     react-router-dom  <Router></Router>   <Route></Route>  <Link></Link>
// 动态路由：
//     <Route path="/detail/:id"></Route>   this.props.match.params.id
// 编程式路由：
//     创建history    history.push()注意刷新    history.go(-1)
// 重定向：
//     <Redirect from="/xx" to="/yy"></Redirect>
// Switch:
//     当匹配到一个路由，后面就不匹配了

// Redux?