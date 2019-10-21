import React from "react"

// 组件中的状态   state来实现 第一个react组件都有自已的state,相当于vue中的data
// 当状态改变，视图也会更新

// 状态需要定义到constructor中
// 把状态定义到当前的组件中  this   this表示显示的组件
// 要使用this，需要显示调用super
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"wangcai"
        }
    }
    render(){
        return(
            <>
                <h1>父组件</h1>
                <span>{this.state.name}</span>
            </>
        )
    }
}

export default App;