
function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}
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

// 把状态放到一个函数，这样，函数外面就得不到这个状态了。
function createStore(){
    let state = {
        title: { text: "标题", color: "red" },
        content: { text: "内容", color: "green" }
    }
    // 需要向外暴露一个方法，得到状态
    function getState(){
        return state
    }
    return {
        getState
    }
}

// let store = createStore()
// store.getState()

const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";

function dispatch(action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            appState.title.color = action.payload;
            break;
        case UPDATE_TITLE_TEXT:
            appState.title.text = action.payload;
            break;
        case UPDATE_CONTENT_COLOR:
            appState.content.color = action.payload;
            break;
        case UPDATE_CONTENT_TEXT:
            appState.content.text = action.payload;
            break;
        default:
            break;
    }
}


// 现在就可以使用store.getState()来获取状态
let store = createStore()
renderApp(store.getState());



// renderApp(appState);

// 现在仅仅是完成了根据指定的action.type，派发一个动作，修改状态，但是外面还是可以直接去修改状态
// appState.content.text = "";
// renderApp(appState);
// setTimeout(()=>{
//     dispatch({type:UPDATE_TITLE_COLOR, payload:"skyblue"});
//     dispatch({type:UPDATE_CONTENT_TEXT,payload:"HelloWorld"})
//     renderApp(appState);
// },3000)
