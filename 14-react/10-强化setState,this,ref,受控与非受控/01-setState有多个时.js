import React from "react"
import ReactDOM from "react-dom"

// setState 更新状态  同步更新   异步更新？
// setState更新可能是异步的

// 如果当你有多个setState时，你想得到最终的新值，可以在setState中写一个函数，函数的第一个参数就是prevState
// 或者，你可以利用嵌套，嵌套多个setState，每一个SetState第二个参数是一个回调函数，当状态设置成功后，它会调用
// 第二个回调函数

class Counter extends React.Component{
    state = {number:0} 
    handleClick = (event)=>{
        // setState更新state可能是异步的，内部会把多次更新合并成一次更新
        // this.setState({number:this.state.number+3})
        // this.setState({number:this.state.number+2})
        // this.setState({number:this.state.number+1})
        // console.log(this.state.number) // ?  0

        // 现在我就要在上一次setState的基础上再去改变状态
        // 第1种写法：在setState中写一个函数，函数的第1个参数代表上次的状态
        // this.setState((prevState)=>({number:prevState.number+1}))
        // this.setState((prevState)=>({number:prevState.number+1}))
        // this.setState((prevState)=>({number:prevState.number+1}))

        // 第2种写法：嵌套  setState可以写两个参数，第二个参数是一个回调函数
        // this.setState({number:this.state.number+3},()=>{
        //     this.setState({number:this.state.number+3},()=>{
        //         this.setState({number:this.state.number+3})
        //     })
        // })
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, window.app)