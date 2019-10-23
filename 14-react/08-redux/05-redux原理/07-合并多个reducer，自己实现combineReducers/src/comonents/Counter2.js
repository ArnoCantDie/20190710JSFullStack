import React, { Component } from 'react'
import {bindActionCreators} from "../redux"
import * as types from "../store/action-types"
import store from "../store"

// payload 
function increment(payload){
    return {type:types.ADD2,payload}
}
function decrement(payload){
    return {type:types.SUB2,payload}
}
let actions = {increment,decrement};
actions =  bindActionCreators(actions,store.dispatch);

export default class Counter2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:store.getState().counter2.number
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter2.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); 
    }
    render() {
        return (
            <div>
                <h1>Counter2</h1>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(1)}>+</button>
                <button onClick={()=>actions.decrement(1)}>-</button>
            </div>
        )
    }
}