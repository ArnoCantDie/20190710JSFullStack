let Vue;
class Router{

}

// 如果把一个方法写到构造器的原型上，那么这个构造器的实例都会调用这个文件
// Vue.prototye.say = function(){}
// this.router.push("/home")  this表示Vue实例  
// Vue.prototype.router = xxxx 

// Vue.use(xxxx)  xxxx中必须要有一个install   Vue最终会去找install方法
// install方法中第一个参数是Vue的构造器
// 当使用Vue.use() 默认会调用install方法  这个install方法只执行一次
Router.install = (_Vue)=>{
    // console.log(_Vue)
    // console.log("*************")
    Vue = _Vue
    // 混入  内部会把这个对象给每一个组件属性混合在一起
    Vue.mixin({
        beforeCreate () {
            console.log("........")
        }
    })
}

export default Router