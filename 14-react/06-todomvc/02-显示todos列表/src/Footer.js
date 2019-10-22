import React, { Component } from "react"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <span className="todo-count"><strong>1</strong> items left</span> 
            <ul className="filters">
                <li><a href="" className="selected">all</a></li>
                <li><a href="" >active</a></li>
                <li><a href="" >completed</a></li>
            </ul>
            <button className="clear-completed">clear completed</button>
        </footer>
        )
    }
}