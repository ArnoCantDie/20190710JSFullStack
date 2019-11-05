// 不OK
// export 110; // 不能直接导出字面量

// 不OK
// let a = 110;
// export a;  // 这种写法，也是直接导出一个值

// 导出接口  
// export let a = 1;  // 导出a接口
// export let b = 2;  // 导出a接口

// 导出接口
// let a = 1;
// let b = 2;
// export{
//     a,b
// }

// 导出时起别名
// let a = 1;
// let b = 2;
// export{
//     a as hello,
//     b
// }

// 导入时起别名
// let a = 1;
// let b = 2;
// export{
//     a,
//     b
// }

// let a = 1;
// let b = 2;
// // setInterval(()=>{
// //     a++;
// // },1000)
// export{
//     a,b
// }

// let a = 110;

// export{ // export不能导出一个具体的值
//     a 
// }
// export default "hello" // export default可以导出一个具体的值

// export {
//     a:110;
//     default:"hello"
// }

// let a = 110;
// let mydefault = 666;

// export {
//     a,mydefault
// }

// export default 666

// export {
//     default
// }

// let a = 110;
// export {
//     a
// }
// import {a} form "./out.js"

// export default "hello"
// export{default}
// {default as x importx} form "./out.js"

// let a = 1;
let b = 2;
export {
    // a as haha,
    b as default
}

export default 2






