// 观察者模式分：观察者和被观察者（在被观察者中存储观察者）  之间有关系 观察者模式是基于订阅和发布
// 订阅和发布之间是没有关系

// 被观察者
class Subject{
    constructor(){
        this.arr = [] // 存储谁在观察者
        this.state = "很开心"
    }
    attach(o){
        this.arr.push(o)
    }
    setState(newState){
        this.state = newState
        this.arr.forEach(o=>o.update(newState))
    }
}
// 观察者
class Observer{
    constructor(name){
        this.name = name;
    }
    update(newState){
        console.log(this.name,"小宝宝状态:",newState)
    }
}
let s = new Subject("小宝宝")
let o1 = new Observer("我")
let o2 = new Observer("我媳妇")
s.attach(o1)
s.attach(o2)
// console.log(s.state)
s.setState("不开心")
// console.log(s.state)
