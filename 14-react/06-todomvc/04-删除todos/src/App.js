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
    // 添加toto
    addTodo(todo){
        this.state.todos.push(todo);
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除todo
    deleteTodo(todo){
        let index = this.state.todos.findIndex(t=>t==todo);
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        })
    }
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList deleteTodo={this.deleteTodo.bind(this)}  todos = {this.state.todos}></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
