// ------------------ 对于箭头函数，考察的基本都是this问题
// function f(x){
//     function g(y){
//         return x+y;
//     }
//     return  g(1)
// }
// console.log(f(1))

// console.log((x=>(y=>x+y)(1))(1));

// 箭头函数中没有this，没有argument，没有protototy

// let a = 110;
// let obj = {
//     a : 666,
//     f(){
//         window.setTimeout(function(){
//             // this 表示window
//             console.log(this.a)
//         },1000)
//     }
// }
// obj.f(); // undefined

// --------- 在浏览器环境测试
let a = 110;
let obj = {
    a : 666,
    f(){
        setTimeout(function(){
            console.log(this.a)
        },1000)
    }
}
obj.f(); // undefined



