import React from "react"
import ReactDOM from "react-dom"

// 下面是在类中使用上下文   那如何在函数组件中使用上下文呢？

// 现在就是想在多个组件中使用Color状态
// 需要把这个状态一定是放在它们共同的父组件中的
// 然后就可以利用react中提供的api创建一个上下文
let ColorContext = React.createContext();  // Context上下文对象

// Context对象中提供了两个api，一个是Provider 提供数据
// 另一个是Consumer，消费数据  获取数据

// Context.Provder 是一个组件  Context.Provder就表示提供数据的

class Wrapper extends React.Component {
    state = { color: "red" }
    changeColor = (color) => {
        // this.setState({color:color})
        this.setState({ color })
    }
    render() {
        let contextValue = { color: this.state.color, changeColor: this.changeColor }
        return (
            <ColorContext.Provider value={contextValue}>
                <div style={{ border: `8px solid ${this.state.color}`, padding: "5px" }}>
                    <h1>Wrapper</h1>
                    <Header></Header>
                    <Main></Main>
                </div>
            </ColorContext.Provider>

        )
    }
}

class Header extends React.Component {
    // 然后就需要在子组件中使用这个上下文提供的数据了 
    // 需要给类加上一个静态属性，值是就是这个上下文
    // ColorContext 此时这个ColorContext中就有数据
    // static contextType = ColorContext;
    // static contextType = ColorContext; 得到上下文
    // this.contextType.value.color 直接从上下文中取数据
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Header</h1>
                <Title></Title>
            </div>
        )
    }
}
class Title extends React.Component {
    // static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Title</h1>
            </div>
        )
    }
}

class Main extends React.Component {
    // static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Main</h1>
                <Content></Content>
            </div>
        )
    }
}
class Content extends React.Component {
    // static contextType = ColorContext;
    render() {
        console.log(this.context)
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Content</h1>
                <button onClick={ ()=>this.context.changeColor("blue") }>变蓝</button>
                <button onClick={() => this.context.changeColor("green")}>变绿</button>
            </div>
        )
    }
}
ReactDOM.render(<Wrapper></Wrapper>, window.app)