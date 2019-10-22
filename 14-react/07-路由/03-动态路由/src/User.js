import React from "react"
import {Route,Link} from "react-router-dom"

import Reg from "./Reg"
import Login from "./Login"

export default class User extends React.Component {
    render() {
        return (
            <div>
                <h1>用户中心</h1>
                <ul>
                    <li>
                        <Link to="/user/reg">注册</Link>
                        <Link to="/user/login">登录</Link>
                    </li>
                </ul>

                {/* 配路由 */}
                <Route path="/user/reg" component={Reg}></Route>
                <Route path="/user/login" component={Login}></Route>
            </div>
        )
    }
}