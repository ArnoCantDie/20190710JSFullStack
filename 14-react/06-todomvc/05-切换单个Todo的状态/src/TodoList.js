import React, { Component } from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <section className="main">
                <input type="checkbox" className="toggle-all" />
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                        <Todo toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} todo={todo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}
TodoList.propTypes = {
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
}