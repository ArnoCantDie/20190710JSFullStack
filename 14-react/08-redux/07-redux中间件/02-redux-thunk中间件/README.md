

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
