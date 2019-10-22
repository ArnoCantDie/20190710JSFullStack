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
    // 切换单个todo状态
    toggleTodo(todo){
        let index = this.state.todos.findIndex(t=>t==todo);
        this.state.todos[index].complete = !this.state.todos[index].complete;
        this.setState({
            todos:this.state.todos
        })
    }
    // 批量切换todo的状态  done表示true或false
    toggleAll(done){
        this.state.todos.forEach(todo=>todo.complete=done)
        this.setState({
            todos:this.state.todos
        })
    }
    // 判断所有todo的complete
    allChecked(){
        // let res = this.state.todos.every(function(todo){
        //     // todo　每一个todo
        //     return todo.complete == true
        // })
        // return res;
        return this.state.todos.every(todo=>todo.complete)
    }
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList allChecked={this.allChecked()} toggleAll={this.toggleAll.bind(this)} toggleTodo={this.toggleTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}  todos = {this.state.todos}></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
