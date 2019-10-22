import React, { Component } from 'react'
export default class OddAdd extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <button onClick={()=>this.props.incrementIfOdd()}>OddAdd+</button>
        )
    }
}