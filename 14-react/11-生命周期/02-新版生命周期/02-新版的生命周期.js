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
    // nextProps,prevState
    // nextProps 就是父给子传递的过来的新的数据 
    // prevState 是子的上一次的状态
    static getDerivedStateFromProps(nextProps,prevState){
        // nextProps 表示父向下传递的新的值 1 2 3 4 5
        // prevState  0 0 0 
        // console.log(nextProps,prevState)  // {number: 0}  {number: 0}
        let {number} = nextProps; 
        // console.log(number)
        // if(number%2 === 0){
        //     return { number:number+10 }
        // }else{
        //     return { number:number+100 }
        // }

        // prevState 表示是子组件的上一次状态
        if(number%2 === 0){
            // console.log(prevState.number)
            return { number:prevState.number + number+10 }
        }else{
            // console.log(prevState.number)
            return { number:prevState.number + number+100 }
        }
    }
    handleChange = ()=>{
        this.setState({
            number:this.state.number+999
        })
    }
    render(){
        return(
            <div>
                <h1>子组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleChange}>改变状态</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, window.app)


// 新版中多了：getDerivedStateFromProps，getSnapshotBeforeUpdate

// getDerivedStateFromProps 利用这个钩子，就可以把父传递过来的数据变成自身的状态，并且可以修改状态
// getSnapshotBeforeUpdate 可以获取dom的信息
