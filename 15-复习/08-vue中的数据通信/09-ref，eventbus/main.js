// 是项目的入口 
import Vue from "vue";
import App from "./App"

// $bus 就是一个挂载在Vue原型上的一个方法
// 有了一个vm，就可以使用$on  $emit
// Vue.prototype.$bus = function(){
//     return new Vue()  
// }
// Vue.prototype.$bus = ()=>new Vue()  
// 直接在Vue原型上面挂一个vm
Vue.prototype.$bus = new Vue()  


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