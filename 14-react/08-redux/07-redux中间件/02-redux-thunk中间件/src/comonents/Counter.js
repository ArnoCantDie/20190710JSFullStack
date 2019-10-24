import React, { Component } from 'react'
import {bindActionCreators} from "../redux"
import * as types from "../store/action-types"
import store from "../store"

// payload 
function increment(payload){
    return {type:types.ADD,payload}
}
function decrement(payload){
    return {type:types.SUB,payload}
}
let actions = {increment,decrement};
actions =  bindActionCreators(actions,store.dispatch);

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
                <button onClick={()=>actions.increment(2)}>+</button>
                <button onClick={()=>actions.decrement(2)}>-</button>
            </div>
        )
    }
}