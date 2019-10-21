import React from "react"
import PropTypes from 'prop-types';

const App = props => (
    <div>
        <h1>无状态组件</h1>
        {/* 报错：无状态组件不能访问this */}
        {/* <p>{this.props.name}</p> */}
        <p>{props.name}</p>
    </div>
)


// 使用 PropTypes 进行类型检查

// Warning: Failed prop type: Invalid prop `name` of type `boolean` supplied to `App`, expected `string`.
App.propTypes = {
    name:PropTypes.string
}

App.defaultProps = {
    name:"xxxxx"
}

// function App(props) {
//     return (
//         <div>
//             <h1>无状态组件</h1>
//         </div>
//     )
// }
export default App;
