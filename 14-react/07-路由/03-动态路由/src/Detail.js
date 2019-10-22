import React from "react"

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
            </div>
        )
    }
}