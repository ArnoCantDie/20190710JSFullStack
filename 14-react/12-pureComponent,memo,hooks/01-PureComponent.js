import React from "react"
import ReactDOM from "react-dom"
// React.Component 自己写的组件需要继承React.Component 
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    render() {
        console.log("父组件的 render")
        return (
            <div>
                <div>{this.state.date.toString()}</div>
                <Child></Child>
            </div>
        )
    }
}
// React.PureComponent  如果一个组件继承了PureComponent，它里面的状态没有发生改变，那么它就不会重新渲染
class Child extends React.PureComponent {
    render(){
        console.log('子组件的 render');
        return (
            <div>子组件</div>
        )
    }
}
ReactDOM.render(<Father />, window.app)

// 如果有父子组件，当父组件render时，子组件也会重新render
// 子组件中什么也没有做，也就是状态没改变，不想让它重新渲染

// React.PureComponent

