import React,{useState} from "react"
import ReactDOM from "react-dom"

// function Counter(){
//     let [number,setNumber] = useState(0)
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={()=>setNumber(number+1)}>+</button>
//         </div>
//     )
// }

// function Counter(){
//     // useState 每一次渲染都是一个独立的闭包
//     // useState 每次改变状态时，都有自己独立的事件处理函数
//     // usState  在使用alert时，仅仅是捕获到，当你点击这个按钮时当时的状态
//     let [number,setNumber] = useState(0)
//     function alertNumber(){
//         setTimeout(()=>{
//             alert(number)
//         },3000)
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={()=>setNumber(number+1)}>+</button>
//             <button onClick={alertNumber}>alertNumber</button>
//         </div>
//     )
// }

function Counter(){
    let [number,setNumber] = useState(0)
    function alertNumber(){
        setTimeout(()=>{
            alert(number)
        },3000)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number+1)}>+</button>
            <button onClick={alertNumber}>alertNumber</button>
        </div>
    )
}

ReactDOM.render(<Counter />, window.app)

// React Hooks  16之后
// 类组件有什么不足：
//    1，有N个生命周期的钩子
//    2，this问题
//    3，多个setState
//    ..... 

// React不推荐使用类组件，代替品，使用函数式组件。
// 函数式组件中没有生命周期，没有this，没有state

// hooks  8 9个api   usexxx 

// hooks目的是让函数式组件变强大（和类组件一样强大）

// 在类组件中不能使用hooks，因为hooks就是针对函数式组件来设计 

// useState   状态

// todomvc  ----->   函数式组件+hooks

// 总结：setState  this  ref 生命周期（老版和新版）  PureComponent   React.memo()  
//       hooks   usexxx  useState  useRef  useReducer  useContext ... 
//      hooks--->todomvc
//      5天  --->  ts
//       vue3.0    react   


