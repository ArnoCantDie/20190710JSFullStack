const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";


function renderTitle(state) {
    let element = document.getElementById("title")
    element.style.color = state.color;
    element.innerHTML = state.text;
}
function renderContent(state) {
    let element = document.getElementById("content")
    element.style.color = state.color;
    element.innerHTML = state.text;
}
// 初始化状态
let initState = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "green" }
}
function reducer(state=initState,action){
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            return {...state,title:{...state.title,color:action.payload}};
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.payload}};
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.payload}};
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.payload}};
        default:
            return state;
    }
}
function createStore(reducer) {
    let state;
    let listeners = [];
    function getState() {
        return state
    }
    function dispatch(action) {
        state = reducer(state,action);
        // console.log(state)
        // listeners.forEach(function(listener){
        //     listener()
        // });
        // 发布订阅
        listeners.forEach(l=>l());
    }
    // 当调用方法时，就可以使用订阅  listener是一个回调函数
    function subscribe(listener){
        listeners.push(listener);
        return function(){
            // 可以保证不再渲染render函数
            listeners = listeners.filter(item=>item!=listener)
        }
    }
    //初始化state 
    dispatch({ type : '@@redux/INIT'});
    return {
        getState,
        dispatch,
        subscribe
    }
}

let store = createStore(reducer)

function renderApp() {
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}
renderApp();  // 把已有的状态给渲染出来
let unsubscribe = store.subscribe(renderApp)

setTimeout(() => {
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" });
    unsubscribe();  // 表示不再调用render函数
    store.dispatch({ type: UPDATE_CONTENT_TEXT, payload: "Hello world" });
}, 3000)

