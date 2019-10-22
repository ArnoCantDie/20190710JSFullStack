import React from "react"

import { createBrowserHistory } from 'history';
// 生成history 
let history = createBrowserHistory();

// 得到id,发起axios请求，获取详情的数据
export default class Detail extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2>商品详情页面</h2>
                <h4>{"发起axios请求获取"+this.props.match.params.id+"号商品的数据"}</h4>
                {/* <button onClick={()=>history.goBack()}>返回</button> */}
                <button onClick={()=>history.go(-1)}>返回</button>
            </div>
        )
    }
}