import * as React from "react"
const todoItemSyle:React.CSSProperties = {
    color:"red",
    backgroundColor:"green"
}
interface Props{
    content:string
}
const TodoItem:React.SFC<Props> = (props:Props)=>(
    <li style={todoItemSyle}>{props.content}</li>
)
export default TodoItem;










