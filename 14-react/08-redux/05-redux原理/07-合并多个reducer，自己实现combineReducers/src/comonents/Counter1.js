import React, { Component } from 'react'
import {bindActionCreators} from "../redux"
import * as types from "../store/action-types"
import store from "../store"

// 叫actioncreator
function increment(payload){
    return {type:types.ADD1,payload}
}
function decrement(payload){
    return {type:types.SUB1,payload}
}
let actions = {increment,decrement};
actions =  bindActionCreators(actions,store.dispatch);

export default class Counter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().counter1.number
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter1.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); 
    }
    render() {
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(1)}>+</button>
                <button onClick={()=>actions.decrement(1)}>-</button>
            </div>
        )
    }
}