import React from "react"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"wangcai",
            age:100
        }
        // 在构造器中把this绑定到f1上
        this.f1 = this.f1.bind(this)
    }
    render(){
        return(
            <>
                <h1>父组件</h1>
                {/* 使用状态 状态变了，视图要更新 如何让状态改变？*/}
                {/* jsx中的this还是代表当前组件 */}
                <span>{this.state.name}</span>
                <span>{this.state.age}</span>

                {/* 改变状态：靠事件 */}
                {/* 默认情况下，this.f1表示没有手动绑定this */}
                {/* <button onClick={this.f1}>修改状态</button> */}

                {/* 手动地绑定this this.f1.bind(this) 让f1中可以使用this*/}
                {/* <button onClick={this.f1.bind(this)}>修改状态</button> */}

                {/* 不绑定，把函数直接写在jsx中 */}
                {/* <button onClick={()=>{console.log(this)}}>修改状态</button> */}

                {/* 另外一种绑定方法 */}
                <button onClick={this.f1}>修改name</button>
                <button onClick={this.f2.bind(this)}>修改age</button>
            </>
        )
    }
    // 在react中一个方法中的this，并不代表当前组件，如果你想让它代表当前组件
    // 需要手动绑定this
    f1(){
        // alert("hello")
        // console.log(this)  // undefined
        // 绑定后再打印
        // console.log(this)  // 此时this就代表当前组件

        // react中改变状态  setState
        // this 当改变状态时，一定要注意this
        this.setState({
            name:"xiaoqiang"
        })
    }
    f2(){
        this.setState({
            // age:this.state.age+1
            // this.state.age++  ++在后  this.state.age++整体是一个旧值
            // age:this.state.age++  
            age:++this.state.age
        })
    }
}
export default App;