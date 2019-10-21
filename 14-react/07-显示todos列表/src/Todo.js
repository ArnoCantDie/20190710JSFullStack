import React,{Component} from "react"
import PropTypes from "prop-types"
export default class Todo extends Component{
    render(){
       return(
        <li className="todo">
             <div className="view">
                <input type="checkbox" checked={this.props.todo.complete} />
                <label>{this.props.todo.content}</label>
                <button className="destroy"></button>
                <input type="text" ref='ipt' style={{display:"none"}}  className="edit" />
             </div>
        </li>
       )
    }
}

Todo.propTypes = {
    todos:PropTypes.object.isRequired
}