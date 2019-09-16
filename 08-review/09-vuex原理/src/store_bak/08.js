let Vue;
// forEach是用来循环一个对象
const forEach = (obj, callback) => {
    // 把数组中的每一个key得到  objc[key] 
    // key  value  ----> callback
    Object.keys(obj).forEach(key => {
        callback(key, obj[key])
    })
}
// 仓库  --->  state  getters  mutations  actions
// state  getters   mutations  
class Store {
    constructor(options) {
        // 把state变成响应式  状态改变要更新视图
        this._s = new Vue({
            data: {
                state: options.state
            }
        })
        // getters的原理
        let getters = options.getters || {}
        this.getters = {};
        forEach(getters, (getterName, value) => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return value(this.state)
                }
            })
        })
        // mutations的原理
        let mutations = options.mutations || {}
        this.mutations = {};
        forEach(mutations, (mutationName, value) => {
            this.mutations[mutationName] = (payload) => {
                value(this.state, payload)
            }
        })
        // actions的原理 
        let actions = options.actions || {}
        this.actions = {};
        forEach(actions,(actionName,value)=>{
            this.actions[actionName] = (payload)=>{
                value(this,payload)
            }
        })
    }
    // type是actions的类型  
    dispatch=(type,payload)=>{
        this.actions[type](payload)
    }
    // vuex   commit一个mutaions    dispatch一个actions
    // type是mutations的类型
    commit=(type, payload)=>{
        this.mutations[type](payload)
    }
    // 用来获取state  this.$store.state.age
    get state() {
        return this._s.state
    }
}
const install = _Vue => {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}
export default { install, Store }