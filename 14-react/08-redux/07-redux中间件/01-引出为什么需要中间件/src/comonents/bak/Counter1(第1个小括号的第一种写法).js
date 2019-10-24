import React, { Component } from 'react'
import actions from "../store/actions/counter1"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
class Counter1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment(3)}>+</button>
                <button onClick={()=>this.props.decrement(3)}>-</button>
            </div>
        )
    }
}
// 第1个小括号有多种写法
// 第3种如下：
function mapStateToProps(state){
    return {
        number:state.counter1.number
    }
}
function mapDispatchToProps(dispath){
    return bindActionCreators(actions,dispath)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter1);