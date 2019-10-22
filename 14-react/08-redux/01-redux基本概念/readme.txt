// redux   类似于vuex   vuex是专门针对vue设计   redux是一个独立的状态管理器
// redux可以配合react  jq  js  vue来用

// 学习redux，先不要在react中用，先研究redux中的使用

// 可以从https://www.bootcdn.cn/redux/上面下载redux源码

store  仓库   仓库中放数据（状态）
思考？如何创建一个仓库：把redux源码引入到项目，项目中就有一个Redux对象。通过reduc对象中的createStore就可以创建一个仓库

reducer:可以当作是仓库的管理员，当创建仓库时，就需要给仓库指定一个reducer

state:状态（数据） state:{count:0}  todos:[{content:"AAA",complete:false}]

action:表示一个动作，修改状态的一个动作 {type:"increatment"}  {type:decreatement}

Redux中的数据：
index.html:12 
{__DO_NOT_USE__ActionTypes: {…}, applyMiddleware: ƒ, bindActionCreators: ƒ, combineReducers: ƒ, compose: ƒ, …}
applyMiddleware: ƒ applyMiddleware()
bindActionCreators: ƒ bindActionCreators(actionCreators, dispatch)
combineReducers: ƒ combineReducers(reducers)
compose: ƒ compose()
createStore: ƒ createStore(reducer, preloadedState, enhancer)
__DO_NOT_USE__ActionTypes: {INIT: "@@redux/INIT7.s.q.t.n.s", REPLACE: "@@redux/REPLACEj.z.5.n.h.g", PROBE_UNKNOWN_ACTION: ƒ}
__esModule: true
__proto__: Object

store中的数据：
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
Symbol(observable): ƒ observable()
__proto__: Object

getState：用来从仓库中获取状态
dispatch：派发一个aciton
subscribe：订阅,当状态改变，就会执行回调函数


在redux中，store是核心，通过Redux.createStore可以创建一个store,
需要给store分配一个管理员，管理员是一个纯函数，当修改状态时，需要让管理员来
修改，你需要告诉管理一个老的状态和一个action，aciotn表示修改状态的一个动作，
管理根据这个老的状态和action就会返回给你一个新的状态，当状态发生改变，就会处罚
subscribe的回调函数，如何给管理派发一个动作，通过dispatch给管理员派发一个动作。

action creators : 表示创造一个action


store: 
state:
action:
reducer:
action creator:
纯函数：同样的输入{count:1}有同样的输出{count:1}   数据结构要保持一样

react:   是一个独立的框架
    jsx 
    组件 
    props
    state  setState   
    事件
    受控制与非受控
    ....

redux:  也是一个独立的状态管理器
    store 
    state 
    reducer 
    action 
    action creator 
    store.dispatch 
    store.subscribe   store.getState

虽然它俩都是独立的，但是一般我们会把他俩结合起来用，靠react-redux来结合。

react-redux:

