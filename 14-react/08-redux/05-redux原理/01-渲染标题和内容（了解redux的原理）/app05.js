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
        listeners.forEach(l=>l());
    }
    function subscribe(listener){
        listeners.push(listener);
    }
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
renderApp();  
store.subscribe(renderApp)

setTimeout(() => {
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" });
}, 3000)

setTimeout(()=>{
    store.dispatch({ type: UPDATE_CONTENT_TEXT, payload: "Hello world" });
},6000);
