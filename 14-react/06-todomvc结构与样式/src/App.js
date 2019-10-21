import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./styles/todo-mvc.css"

class App extends React.Component{
    render(){
        return(
            <div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
