<button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
<button onClick={()=>store.dispatch({type:types.SUB})}>-</button>

上面的代码可以简化：
    1，先简化action {type:types.ADD}  ----> action creator 是一个函数

<button onClick={()=>store.dispatch(increment())}>+</button>
<button onClick={()=>store.dispatch(decrement())}>-</button>

bindActionCreators 绑定actionCreator  需要把actionCreators和dispatch自动绑在一起
increment =  bindActionCreators(increment,store.dispatch)  // 得到一个绑定后的increment
decrement =  bindActionCreators(decrement,store.dispatch)  // 得到一个绑定后的decrement


<button onClick={()=>increment()}>+</button>
<button onClick={()=>decrement()}>-</button>








