

真正去改变状态，一定要派发一个action。
action可能通过actioncreator产生。  
也就是actioncreator产生一个action，action是一个对象。

dispatch(action)  // dispatch里面要么放一个action
dispatch(actioncreator())   // dispatch里面要么放一个actioncreator（前提是这个actioncreator必须要产生一个action）

有时候，我们的actioncreator，可以不产生一个action，也就是说dispatch就处理不了。说白了，默认情况下，dispatch只能派发一个action。action必须是一个对象

需求，点击按钮，过3秒后，再加：
方案1：
    <button onClick={()=>{
        setTimeout(()=>{
            this.props.increment(3)
        },3000)
    }}>过3秒后再加</button>

方案2：
    可以把这个逻辑放到actioncreator中

react技术栈：
    react.js + react-router + redux（mobx）+ es6 + webpack(打包界的老大)+ axios(fetch) + UI库（Ant Design）

分析下面的项目：    
    https://github.com/liuyangjike/react-elm

react-router：
    history路由
    hash路由
        ....
react(最核心): 
    JSX
    组件（类，函数） 状态在组件中  只有在类组件中才能写状态
        类组件和函数组件有什么区分？
            1，类组件中可以写状态，函数组件中不能写状态
            2，类组件中有this，函数组件中没有this
            3，类组件有生命周期，函数组件没有生命周期

            react hooks  就可以在函数组件中写状态
            react官网也说了，尽可能使用函数式组件+hooks
    事件 改变状态
    表单 input  select  textarea  非受控--->受控  state
    生命周期（老版的生命周期和新版的生命周期） 没讲
    Context（上下文）  没讲

redux(老大)（有替代品--> mobx(老二) ）:  数据流：vuex,redux,mobx
    核心 store ---> dispatch({action})，getState()，subscribe()
    reducer ---> 函数  管理员   老状态+action--->新状态
        拆分reducer  ---->  合并reducer 
    中间件：dispatch时，默认只能派发一个普通action，如果想派发其它的，需要中间件
    compose() 
    bindActionCreators    
    combineReducers
    createStore 
    applyMiddleware
    index

react-redux:
    把react和redux连接起来，目的是让我们在组件非常方便获取和改变状态 
    第一步：<Provider store={store}></Provider>
    第二步：connect(xxx,actions)(Counter)
    第三步：this.props.numer   this.props.increment()

react源码+redux源码+ 原理级

<!-- 
    react行业解决方案：
        umi   
        dva
 -->

 <!-- 
    ts : js  
    vue   ts     
    react  ts
    node    ts


    ts小项目 

    css  
    js   4  
    vue
    node 
    react  
    网络
    杂 
    
  -->









Context(上下文)  联系上下文，总结xxx 

react  提供一个Context 







