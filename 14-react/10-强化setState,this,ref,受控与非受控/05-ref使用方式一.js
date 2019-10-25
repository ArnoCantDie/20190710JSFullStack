import React from "react"
import ReactDOM from "react-dom"

// ref  可以利用ref获取真实的dom元素
// 常见的用法有三种：
// 1：直接使用ref起名字,利用this.refs.xxx来获取
//    已经被废弃
class Counter extends React.Component{
    state = {number:0} 
    add = ()=>{
       let num1 = this.refs.num1.value;
       let num2 = this.refs.num2.value;
    //    console.log(num1,num2)
    //    console.log(typeof num1)
    //    console.log(typeof num2)
       let res = parseFloat(num1)+parseFloat(num2)
       this.refs.res.value = res;
    }
    render(){
        return(
            <div>
                <input ref="num1" />+<input ref="num2" /><button onClick={this.add}>=</button><input ref="res"/>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, window.app)