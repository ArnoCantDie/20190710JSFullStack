let Vue;
class Router{
    constructor(){
        this.a = 110
    }
}

Router.install = (_Vue)=>{
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {
            // console.log(this)
            // 判断根组件是谁
            if(this.$options&&this.$options.router){
                // 找到根组件 main.js
                this._router = this.$options.router
            }else{
                // 让所有的子组件 都有这个_router属性 指向当前的router
                this._router = this.$parent && this.$parent.router
            }
            console.log(this._router.a)
        }
    })
}

export default Router