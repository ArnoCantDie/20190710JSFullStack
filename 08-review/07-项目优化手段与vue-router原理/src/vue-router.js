let Vue;
class Router{
    constructor({routes}){
        // this.a = 110
        // console.log(routes)
        // map  reduce  reduceRight 
        // routes.reduce(()=>{})
    }
}
// this.$router   this.$route
Router.install = (_Vue)=>{
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {
            if(this.$options&&this.$options.router){
                this._router = this.$options.router
            }else{
                this._router = this.$parent && this.$parent.router
            }
            // console.log(this._router.a)
            // 给每一个组件定义$route 和 $router
            // Object.defineProperty(this,"$route",{
            //     value:{}
            // })
            // Object.defineProperty(this,"$router",{
            //     value:{}
            // })
        }
    }),
    Vue.component("router-link",{
        props: {
            to:String
        },
        render(){
            return <a href={`#${this.to}`}>{this.$slots.default}</a>
        }
    }),
    Vue.component("router-view",{
        render(){
            return null
        }
    })
}
export default Router