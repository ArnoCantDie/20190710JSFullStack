import React from "react"
import ReactDOM from "react-dom"
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {number:0} 
    }
    handleClick = ()=>{
        this.setState({number:this.state.number+1})
    }
    render(){
        return(
            <div>
                <h1>父组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <hr/>
                <SubCounter number={this.state.number}></SubCounter>
            </div>
        )
    }
}
class SubCounter extends React.Component{
    state = {
        number:0
    }
    // 从属性对象中获取派发的状态
    // index.js:1375 Warning: SubCounter: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.
    static getDerivedStateFromProps(nextProps,prevState){
        // console.log("nextProps: ",nextProps)  // {number: 0}
        // console.log("prevState: ",prevState)  // null

        let {number} = nextProps;  // number
        // console.log(number) // 0

        // {} 里面就放子组件的状态
        // 第1个number表示子组件的状态  第2Number才是上面得到的number
        return { number }
    }
    render(){
        return(
            <div>
                <h1>子组件</h1>
                <p>{this.state.number}</p>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, window.app)


// 新版中多了：getDerivedStateFromProps

