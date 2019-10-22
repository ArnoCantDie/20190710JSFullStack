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
                {content:"AAA",complete:true},
                {content:"BBB",complete:true},
                {content:"CCC",complete:true},
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
    // 切换todo状态
    toggleTodo(todo){
        let index = this.state.todos.findIndex(t=>t==todo);
        this.state.todos[index].complete = !this.state.todos[index].complete;
        this.setState({
            todos:this.state.todos
        })
    }
    
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList toggleTodo={this.toggleTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}  todos = {this.state.todos}></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
