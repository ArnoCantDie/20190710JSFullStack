// 老版生命周期参考
// https://juejin.im/post/5c626efd6fb9a04a054026d2

import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    static defaultProps = {name:"wangcai"} // 默认属性
    constructor(props){
        super(props)
        this.state = {number:0} // 初始化的状态
    }
    // componentWillMount has been renamed, 将要被废弃
    UNSAFE_componentWillMount(){
        console.log("Counter: componentWillMount") // 1
    }
    // 在shouldComponentUpdata中就可以优化，如果当前状态和nextState一样
    // 就不再向下走，如果不一样，再去更新
    shouldComponentUpdate(nextProps,nextState){
        console.log("Counter: shouldComponentUpdate") // 
        // return true;
        // console.log(nextState)
        if(nextState.number%2 === 0){
            return true
        }else{
            return false;
        }
    }
    componentWillUpdate(){
        console.log("Counter: componentWillUpdate") // 
    }
    componentDidUpdate(){
        console.log("Counter: componentDidUpdate") 
    }
    handleClick = ()=>{
        this.setState({number:this.state.number+1})
    }
    render(){
        console.log("Counter: render")  // 2
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("Counter: componentDidMount") // 3
    }
}

// class SubCounter extends React.Component{
    
// }


ReactDOM.render(<Counter />, window.app)



