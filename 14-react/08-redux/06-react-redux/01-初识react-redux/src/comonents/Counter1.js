import React, { Component } from 'react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import actions from "../store/actions/counter1"

class Counter1 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.number}</p>
                {/* <button onClick={()=>this.props.increment(2)}>+</button>
                <button onClick={()=>this.props.decrement(2)}>-</button> */}
                <button onClick={()=>this.props.increment(2)}>+</button>
                <button onClick={()=>this.props.decrement(2)}>-</button>
            </div>
        )
    }
}

// state 就是仓库中的状态
// function mapStateToProps(state){
//     // number第1个number是指这个组件中的属性
//     // state.number 指的是仓库中的number
//     return {number:state.number}
// }

// let mapStateToProps = function(state){
//     // number第1个number是指这个组件中的属性
//     // state.number 指的是仓库中的number
//     return {number:state.number}
// }

// ({number:state.number})  如果返回一个对象，需要给穿上对象外面包一个小括号
// let mapStateToProps = state=>({number:state.number})
function mapStateToProps(state){
    return {
        number:state.counter1.number
    }
}

// let mapStateToProps = state=>state.number;

function mapDispatchToProps(dispath){
    return bindActionCreators(actions,dispath)
}

// 这是第1种写法
// let mapDispatchToProps = dispath=>bindActionCreators(actions,dispath)

// 再看一个第2种写法
// let mapDispatchToProps = dispath=>(
//     {
//         increment(payload){
//             return {type:types.ADD1,payload}
//         },
//         decrement(payload){
//             return {type:types.SUB1,payload}
//         }
//     }
// )

// ()  第1个小括号中的写法有N种 每一种目的都是一样，都是把状态和actioncreator映射到组件
// 映射时，要映射状态，还要映射actioncreator  
export default connect(mapStateToProps,mapDispatchToProps)(Counter1);