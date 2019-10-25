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
                <C></C>
            </div>
        )
    }
}

function Child(){
    console.log('子组件的 render');
    return (
        <div>app</div>
    )
};
let C = React.memo(Child)

// 如果一个组件是函数式组件，可以使用React.memo提升性能

// shouldComponentUpdate()  ture   false
ReactDOM.render(<Father />, window.app)


