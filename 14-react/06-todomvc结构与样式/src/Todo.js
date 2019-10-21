import React,{Component} from "react"

export default class Todo extends Component{
    render(){
       return(
        <li className="todo">
             <div className="view">
                <input type="checkbox" />
                <label>vue.js</label>
                <button className="destroy"></button>
                <input type="text" ref='ipt' style={{display:"none"}}  className="edit" />
             </div>
        </li>
       )
    }
}