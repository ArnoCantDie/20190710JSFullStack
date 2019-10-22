import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/counter"

import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"

class Counter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props.counter)
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <Add increment={this.props.increment}></Add>
                <br/>
                <Sub decrement={this.props.decrement}></Sub>
            </div>
        )
    }
}
// 把redux中的状态映射成一个组件的属性
// state 表示redux中的状态
function mapStateToProps(state){
    return {
        counter:state.counter
    }
}
// 把dispatch方法也映射到Counter组件上
function mapDispatchToProps(dispath){
    return bindActionCreators(actions,dispath)
}

// 第1个小括号中就写两个映射方法，名字自己定
export default connect(mapStateToProps,mapDispatchToProps)(Counter);