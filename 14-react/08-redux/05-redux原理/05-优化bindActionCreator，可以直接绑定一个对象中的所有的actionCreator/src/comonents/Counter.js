import React, { Component } from 'react'
import {bindActionCreators} from "../redux"
import * as types from "../store/action-types"
import store from "../store"

function increment(){
    return {type:types.ADD}
}
function decrement(){
    return {type:types.SUB}
}
// 把上面的两个actioncreator放到一个数组中
let actions = {increment,decrement};
actions =  bindActionCreators(actions,store.dispatch);
// actions的返回值：
// 可以是一个绑定后的actioncreator
// 还可以是一个对象，对象中放了多个绑定后的actioncreator

// bindActionCreators 把actioncreator和dispatch绑定到一起，方便调用
// increment = bindActionCreators(increment,store.dispatch);
// decrement = bindActionCreators(decrement,store.dispatch);

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().number
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); 
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                {/* 上面如果绑定时，第1个参数是数组 */}
                <button onClick={actions.increment}>+</button>
                <button onClick={actions.decrement}>-</button>
            </div>
        )
    }
}