import React from "react" 
import ReactDOM from "react-dom"

// react可以把一个字符串直接渲染到页面上
// ReactDOM.render("hello world~",document.getElementById("app"));

// ------------------------------    

// let ele = <h1>hello 你好~</h1>  
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------    

// jsx中必须有一个根标签
// let ele = <div><h1>hello 你好~</h1><span>ok~</span></div>
// let ele = <><h1>hello 你好~</h1><span>ok~</span></>
// let ele = <React.Fragment><h1>hello 你好~</h1><span>ok~</span></React.Fragment>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------    

// jsx中严格区分大小写  不要使用大写
// 所有标签都要关闭
// 属性必须引号包含
// let ele = <Div><h1>hello 你好~</h1><span>ok~</span></Div>
// let ele = <div><h1>hello 你好~</h1><img /></div>
// let ele = <div><h1 title="hello">hello 你好~</h1><img /></div>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------    

// jsx中可以放字面量，变量，运算符表达式，函数调用，jsx
// 要在Html中放js代码，js代码需要放到{}中   jsx最后都会编译普通的对象
// let name = "wangcai"
// let obj = <strong>strong</strong>
// let ele = <div><h1>123</h1></div>
// let ele = <div><h1>{name}</h1></div>
// let ele = <div><h1>{name+" xiaoqiang"}</h1></div>
// let ele = <div><h1>{1+1+1}</h1></div>
// let ele = <div><h1>{Math.random()}</h1></div>
// let ele = <div><h1>{obj}</h1></div>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------   

// vue中v-if  v-for  react中没有指令  v-if  if...else   三元运算符   v-for  map
// let res = "";
// let islogin = false;
// if(islogin){
//     res = <h1>登录成功</h1>
// }else{
//     res = <h1>登录失败</h1>
// }
// let ele = <div>{res}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// let isLogin = true;
// let loginOk = <h1>登录成功</h1>
// let loginBad = <h1>登录失败</h1>
// let ele = <div>{isLogin ? loginOk:loginBad}</div>
// ReactDOM.render(ele,document.getElementById("app"));


// react对js要求更高

// ------------------------------  

// vue中 v-for
// let books = ["vue.js","react.js","angular.js"];
// let ele = <ul>{books.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------  

// class  ---> className 
// for ----> htmlFor 
// let ele = <div class="box">hello</div>
// let ele = <div className="box">hello</div>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------  

// 在jsx中放注释  注释也是属于js，需要放到{}中
// let ele = <div>{/*这是一个注释*/}</div>
// ReactDOM.render(ele,document.getElementById("app"));

// ------------------------------  

// 写行内样式，需要把样式当成一对象，是一个对象，属性Js代码，需要放到{}
// let ele = <div style={{"color":"red"}}>hello</div>
// ReactDOM.render(ele,document.getElementById("app"));






