import React, { Component } from "react"
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <section className="main">
                <input type="checkbox" className="toggle-all" />
                <ul className="todo-list">
                    <Todo></Todo>
                    <Todo></Todo>
                    <Todo></Todo>
                </ul>
            </section>
        )
    }
}