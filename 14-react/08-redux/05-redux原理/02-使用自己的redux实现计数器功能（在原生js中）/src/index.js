import {createStore} from "./redux"  // 仅仅实现了createStore方法
let show = document.getElementById("show")
let addBtn = document.getElementById("addBtn")
let subBtn = document.getElementById("subBtn")

const ADD = "ADD";
const SUB = "SUB";

function reducer(state = { number: 99 }, action) {
    switch (action.type) {
        case ADD:
            return { number: state.number + 1 }
        case SUB:
            return { number: state.number - 1 }
        default:
            return state;
    }
}

let store = createStore(reducer);

function render(){
    show.innerHTML = store.getState().number;
}
render();
// subscribe是订阅，所谓的订阅就是执行render函数
// unsubscribe是消化订阅，意思就不再执行render函数
let unsubscribe = store.subscribe(render)
addBtn.addEventListener("click", () => {
    store.dispatch({type:ADD})
    // unsubscribe();
    console.log(store.getState().number)
});

subBtn.addEventListener("click", () => {
    store.dispatch({type:SUB})
});






