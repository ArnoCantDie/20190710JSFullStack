import React, { Component } from 'react'
import actions from "../store/actions/counter1"
import {connect} from "react-redux"
class Counter1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.number}</p>
                {/* this.props.increment(3) ----> store.dispatch(increment(3))  */}
                <button onClick={()=>this.props.increment(3)}>+</button>
                <button onClick={()=>this.props.decrement(3)}>-</button>
                {/* 实现3秒后再加的方案1 */}
                {/* <button onClick={()=>{
                    setTimeout(()=>{
                        this.props.increment(3)
                    },3000)
                }}>过3秒后再加</button> */}

                 {/* 实现3秒后再加的方案2 */}
                 {/* incrementAfterThree 映射过来的，可以直接使用  */}
                 {/* 改变状态派发action,action是一个对象，只能派发一个对象  */}
                 {/* this.props.incrementAfterThree()  ----> store.dispatch(incrementAfterThree()) */}
                 {/* 上面说dispath是派发了一个函数，redux不支持 */}
                 {/* 如果你想让dispath可以派发多种类型的东西，你需要对dispath进行增强 */}
                 {/* 在redux中需要靠中间件对dispatch进行增强 */}
                <button onClick={()=>this.props.incrementAfterThree()}>过3秒后再加</button>

                {/* Error: Actions must be plain objects. Use custom middleware for async actions. */}
            </div>
        )
    }
}
let mapStateToProps = state=>({number:state.counter1.number})
export default connect(mapStateToProps,actions)(Counter1);