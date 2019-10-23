import React, { Component } from 'react'
// 在redux中有一个方法，叫bindActionCreators
// 这个方法可以把一个actionCreator和store.dispatch绑在一起
import {bindActionCreators} from "redux"
import * as types from "../store/action-types"
import store from "../store"

// 声明一个action creator   产生action  action是对象
function increment(){
    return {type:types.ADD}
}
// 声明一个action creator   产生action  action是对象
function decrement(){
    return {type:types.SUB}
}
// 得到一个经过绑定后的incrent函数
// 当调用incrment函数，就相当于store.dispatch(increment())
increment = bindActionCreators(increment,store.dispatch);
decrement = bindActionCreators(decrement,store.dispatch);

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().number
        }
    }
    componentDidMount(){
        // subscribe 仅仅是重新调用render函数
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); // 当组件将要xie zai时，不再调用render函数
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                {/* <button onClick={()=>store.dispatch(increment())}>+</button>
                <button onClick={()=>store.dispatch(decrement())}>-</button> */}
                <button onClick={()=>increment()}>+</button>
                <button onClick={()=>decrement()}>-</button>
            </div>
        )
    }
}