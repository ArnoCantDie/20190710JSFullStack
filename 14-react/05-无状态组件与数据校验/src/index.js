import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

// ReactDOM.render(<App name="wangcai" />,document.getElementById("app"));
// {  }仅仅表示里面放js代码
// ReactDOM.render(<App name={ "wangcai666" } />,document.getElementById("app"));
ReactDOM.render(<App />,document.getElementById("app"));
// ReactDOM.render(<App name={ true } />,document.getElementById("app"));

// 无状态组件指这个组件中没有state  数据源是props

// 特点：
    // 1，function  无状态组件不会被实例化，性能高
    // 2，无状态组件不能访问this
    // 3，无状态组件没有生命周期，也就是没有钩子函数
    // 4，无状态组件数据源只能靠props
    // react建议，尽可能地使用无状态组件

// 传递的数据可以校验，propTypes 
