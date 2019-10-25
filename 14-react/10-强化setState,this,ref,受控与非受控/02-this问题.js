
import React from "react"
import ReactDOM from "react-dom"

// this只会出现在类组件中，函数组件中是没有this
// 尽可能使用函数组件，因为函数组件没有this 

// form form有默认的事件  a标签也有默认事件
// 有时候需要把默认的事件取消掉

// 如果想让this代表当前组件，有如下几种处理办法：
// 1，使用箭头函数（里面有没this，就向外找），如果是普通函数，那么它里面的this，就是undefined
// 2，在调用普通方法时，手动绑定this   onSubmit={this.handleSubmit.bind(this)}
// 3，还可以使用匿名函数 onClick={()=>this.f1()}   onClick={()=>{this.f1()}}

class Counter extends React.Component{
    state = {number:0} 
    // handleSubmit = (event)=>{
    //     event.preventDefault();
    //     console.log(this)
    // }

    handleSubmit(event){
        event.preventDefault();
        console.log(this)
    }
    render(){
        return(
            // <form action="" onSubmit={this.handleSubmit.bind(this)}>
            // ()=>{} 叫就匿名函数
            // ()=>{this.handleSubmit()}  
            // function (event){  // 是监听器，监听器的第1个参数是事件对象
            //    this.handleSubmit(event)  // event
            // }
            // 匿名函数   (event)=>{this.handleSubmit(event)}
            // <form action="" onSubmit={(event)=>{this.handleSubmit(event)}}>

            // (event)=>this.handleSubmit(event)
            // functon(){ return this.handleSubmit(event) }
            
            <form action="" onSubmit={(event)=>this.handleSubmit(event)}>
            {/* // <form action="" onSubmit={(event)=>{this.handleSubmit(event)}}> */}
                用户名：<input type="text"/>
                密码：<input type="text"/>
                <input type="submit"/>
            </form>
        )
    }
}

ReactDOM.render(<Counter />, window.app)