import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./styles/todo-mvc.css"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {content:"AAA",complete:false},
                {content:"BBB",complete:true},
                {content:"CCC",complete:false},
            ]
        }
    }
    render(){
        return(
            <div>
                <AddTodo></AddTodo>
                <TodoList todos = {this.state.todos}></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
