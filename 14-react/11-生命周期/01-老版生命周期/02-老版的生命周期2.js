
import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    static defaultProps = {name:"wangcai"} // 默认属性
    constructor(props){
        super(props)
        this.state = {number:0} 
    }
    UNSAFE_componentWillMount(){
        console.log("Counter: componentWillMount") // 1
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Counter: shouldComponentUpdate") // 
        // if(nextState.number%2 === 0){
        //     return true
        // }else{
        //     return false;
        // }
        return true;
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
                <h1>父组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <hr/>
                {this.state.number%2==0 ? <SubCounter number={this.state.number}></SubCounter> : null}
            </div>
        )
    }
    componentDidMount(){
        console.log("Counter: componentDidMount") // 3
    }
}

class SubCounter extends React.Component{
    UNSAFE_componentWillMount(){
        console.log("SubCounter: componentWillMount") // 1
    }
    componentDidMount(){
        console.log("SubCounter: componentDidMount") // 3
    }
    componentWillReceiveProps(){
        console.log("SubCounter: componentWillReceiveProps")
    }
    shouldComponentUpdate(){
        console.log("SubCounter: shouldComponentUpdate")
        // return false;
        return true;
    }
    componentWillUpdate(){
        console.log("SubCounter: componentWillUpdate") // 
    }
    componentDidUpdate(){
        console.log("SubCounter: componentDidUpdate") 
    }
    render(){
        console.log("SubCounter: render")
        return(
            <div>
                <h1>子组件</h1>
                <p>{this.props.number}</p>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("SubCounter: componentWillUnmount") 
    }
}

// 1,父子组件，肯定是先把父中的子渲染了，然后再继续渲染父组件
// 2,刚初始化时，父给子传递数据，并没有对象的钩子，componentWillReceiveProps一定一时半更新的时候才会出发


ReactDOM.render(<Counter />, window.app)



