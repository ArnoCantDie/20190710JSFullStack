import React from "react"

// 如何使用类组件需要继承React.Component
// class App extends React.Component{

// }

// 类组件中靠render  必须要return
class App extends React.Component{
    // 渲染一个jsx
    render(){
        return(
            <>
                <h1>父组件</h1>
            </>
        )
    }
}

export default App;