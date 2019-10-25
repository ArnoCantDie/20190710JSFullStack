import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    state = {number:0} 
    // 在一个类组件中，如果有一个普通的函数，那么这个普通的函数内部的this就是undefiend
    // 如果你想让this指向当前的组件：
    // 1：把普通的函数变成箭头，箭头函数中是没有this，就向外找，就找到外面的this
    // 2: 手动绑定一个this
    // 3: 使用匿名函数  写在正确位置

    // ()=>{
    // }

    // add(){
    //     // Cannot read property 'setState' of undefined
    //     // console.log(this)  // undefined
    //     this.setState({number:this.state.number+1})
    // }
    add = ()=>{
        // Cannot read property 'setState' of undefined
        // console.log(this)  // undefined
        this.setState({number:this.state.number+1})
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                {/* 在没有传递参数的情况下 */}
                {/* <button onClick={this.add}>加1</button> */}
                {/* <button onClick={this.add.bind(this)}>加1</button> */}
                
                {/* Expected an assignment or function call and instead saw an expression */}
                {/* <button onClick={()=>{this.add()}}>加1</button> */}

                <button onClick={this.add}>加1</button>

                {/* 如果去调用一个函数，没有参数，不能加()  {this.add} */}
            </div>
        )
    }
}

ReactDOM.render(<Counter />, window.app)