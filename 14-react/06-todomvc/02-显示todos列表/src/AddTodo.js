import React,{Component} from "react"

export default class AddTodo extends Component{
    render(){
       return(
        <header  className="header">
        <h1>todos</h1>
        <input type="text"  className="new-todo" placeholder="what need to be done?"></input>
    </header>
       )
    }
}