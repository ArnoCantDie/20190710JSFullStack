// 如果不使用模板的形式来写组件，使用jsx来写组件
// 靠的就是render函数，render函数中有一个固定的参数叫h
// h ----> createElement
// h 是一个函数 h()调用函数
// 第一个参数表示要创建什么样的标签
// 第二个参数表示这个标签中的属性
// 第三个参数表示这个标签中的内容
// 在render函数中要返回h的调用


// export default {
//     render(h){
//         return h("h1",{
//             on:{
//                 click(){
//                     alert("world")
//                 }
//             },
//             attrs:{
//                 id:"box"
//             }
//         },[h("span",{},"hello")])
//     }
// }


// export default {
//     // jsx
//     // 如果你要html中写Js,需要把js代码放到{}
//     render(h){
//         return <h1 on-Click={()=>{alert("world")}}><span>Hello</span></h1>
//     }
// }

export default{
    props: {
        n:{
            type:Number
        }
    },
    render(h){
        let tag = "h"+ this.n
        return <tag>{this.$slots.default}</tag>
    }
}