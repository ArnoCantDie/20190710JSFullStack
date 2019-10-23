// 如果你绑定一个actionCreator，内部还是dispatch(actionCreator())
// 实现真正绑定
function bindActionCreators(actionCreator,dispatch){
    return function(){
        return dispatch(actionCreator())
    }
}
// 判断传递过来的是一个函数，还是一个对象
export default function(actionCreator,dispatch){
    if(typeof actionCreator == "function"){
        // 如果是函数，直接调用绑定的函数
        return bindActionCreators(actionCreator,dispatch);
    }
    // 如果是对象，循环对象，挨个绑定，绑定后都放到一个新的对象，最后把新的对象返回
    const boundActionCreators = {};
    // actionCreator 是一个对象 let actions = {increment,decrement};
    for(let key in actionCreator){
        boundActionCreators[key] = bindActionCreators(actionCreator[key],dispatch) 
    }
    return boundActionCreators;
}
// bindActionCreators 当我们调用了这个函数，要么返回一个actioncreator要么返回一个对象，对象中有多个绑定好的actioncreator

