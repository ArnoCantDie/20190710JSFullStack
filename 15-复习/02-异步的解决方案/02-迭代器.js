// 使用传统的循环不太优雅
// const colors = ["red", "green", "blue"];
// 命令式
// 它既要追踪下标位置，
// 还要判断循环何时停止。
// for (var i = 0, len = colors.length; i < len; i++) {
//   console.log(colors[i]);
// }
// 声明式
// for(i abc color){i}

// ----------------------------------- iterator
// iterator： 迭代器
//    是一个对象，对象中有一个next函数，函数返回一个对象，返回的对象中有一个value有一个done
// 作用是用来创建iterator
// function createIterator(items){
//     let i = 0;  // ?:  items[i++]  items.length
//     return {
//         next:function(){
//             // value=items[i++]
//             // done=items.length > i ? false:true 
//             var done = (i >= items.length);
//             var value = !done ? items[i++] : undefined;
//             return {
//                 value:value,
//                 done:done,
//             }
//         }
//     }
// }
// const colors = ["red", "green", "blue"];
// 返回一个迭代器  iterator  是一个对象
// let iterator = createIterator(colors) 
// next() 表示每一次迭代出一项
// console.log(iterator.next()) // {value:"red",done:false}
// console.log(iterator.next()) // {value:"green",done:false}
// console.log(iterator.next()) // {value:"blue",done:false}
// console.log(iterator.next()) // {value:undefined,done:true}
// console.log(iterator.next()) // {value:undefined,done:true}
// console.log(iterator.next()) // {value:undefined,done:true}
// console.log(iterator.next()) // {value:undefined,done:true}
// console.log(iterator.next()) // {value:undefined,done:true}
