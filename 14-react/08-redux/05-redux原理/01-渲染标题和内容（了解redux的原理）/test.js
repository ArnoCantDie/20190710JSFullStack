let state = {name:"wangcai",age:"10",score:{"math":"100"}}
// ...叫展开运算符
// let newState = {...state,name:"xiaoqiang"}
let newState1 = {...state}  // { name: 'wangcai', age: '10', score: { math: '100' } }
let newState2 = {...state,score:{...state.score,"math":"200"}}  // { name: 'wangcai', age: '10', score: { math: '100' } }
console.log(newState1)
console.log(newState2)