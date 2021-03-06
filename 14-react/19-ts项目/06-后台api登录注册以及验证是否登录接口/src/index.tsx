import React from "react";
import ReactDom from "react-dom"
import { Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import { ConfigProvider } from "antd"
import "./assets/css/common.less"
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from "./store"
import Tabs from "./components/Tabs/index"
import Home from "./pages/Home"
import Mime from "./pages/Mime"
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from "./pages/Profile"
import { ConnectedRouter } from "connected-react-router"
import history from "./store/history"

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <main className="main-container">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/mime" component={Mime}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Tabs></Tabs>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
    , document.getElementById("app"));