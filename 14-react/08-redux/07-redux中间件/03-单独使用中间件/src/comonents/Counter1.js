import React, { Component } from 'react'
import actions from "../store/actions/counter1"
import {connect} from "react-redux"
class Counter1 extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment(3)}>+</button>
                <button onClick={()=>this.props.decrement(3)}>-</button>
                <button onClick={()=>this.props.incrementAfterThree()}>过3秒后再加</button>
                <button onClick={()=>this.props.promiseIncrement(1000)}>使用promise加</button>
            </div>
        )
    }
}
let mapStateToProps = state=>({number:state.counter1.number})
export default connect(mapStateToProps,actions)(Counter1);