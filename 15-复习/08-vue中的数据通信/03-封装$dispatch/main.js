// 是项目的入口 
import Vue from "vue";
import App from "./App"

// 自已定义一个$dispatch方法
Vue.prototype.$dispatch = function(eventName,value){
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,value)
        parent = parent.$parent
    }
}

new Vue({
    el:"#app",
    render:h=>h(App)
})