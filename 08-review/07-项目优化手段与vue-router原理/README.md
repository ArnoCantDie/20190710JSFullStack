jsx
    javascript + xml  <name></name>  <age></age>   html  <div></div>
    js代码和xml代码纯着写   javascript+html代码

    利用传统的模块写结构不灵活，vue中也可以使用jsx来解决。


router  


vuex

-------------------
匿名插槽：
    Slot.vue
        <slot></slot>

    App.vue
        <Slot>123</Slot>
        <Slot>
            <template v-slot:default>
                <ul>
                    <li>123</li>
                </ul>
            </template>
        </Slot>

具名插槽：
    Slot.vue
        <slot name="wangcai"></slot>

    App.vue
        <Slot>123</Slot>  // 不OK
        <Slot>
            <template v-slot:wangcai>
                <ul>
                    <li>123</li>
                </ul>
            </template>
        </Slot>

作用域插槽：
    Slot.vue
        <slot :foo="foo" name="wangcai"></slot>
    App.vue
        <Slot>
             <template v-slot:wangcai="ctx">
                {{ctx.foo}}
             </template>
        </Slot>



有一个数组，以指定的标签，渲染出来，方案：
1，render函数  jsx  iView  
2，插槽  ---->  ElementUI

----------------------------------------------------
let data = ["vue","react","node","koa","express]
    1，render   jsx   .js   jsx    react    jsx
    2，作用域插槽   vue中的模板  .vue

---------------------- UI 库  
ElementUI ：作用域插槽方案
iView ：大量使用了render函数

----------------------------------------------------
vue中项目优化：  
    第一类：书写习惯
        1，不需要做响应式的数据，不要放在data中
            data  不要把所有的数据都放到data中，只把你需要做响应式的数据放到data中，如果一个数据放到了data中，vue会给这个数据添加一个getter和setter，当你获取数据调用getter，当你设置数据调用setter，性能不高。  -----> vue中是如何实现MVVM
        2，SPA(Single Page Application) vue react 
            index.html    <div id="app"></div>  加载js   
            路由：/  Home     /cats    Cats     /user   User
            不利于SEO   --->  SSR    
            keep-alive 可以实现组件的缓存，把组件中的结构和数据全部缓存到内存
        3，能拆分的组件尽可能拆分  颗粒度尽可能小
            提高利用性，增加代码的可维护性    
            减小不必要渲染
        4，v-if  v-show 
            v-show 控制的是display  v-show还是会渲染 
            v-if 根据就不会渲染
            能使用v-if的就使用v-if  
            如果说频繁让一个组件显示隐藏，用v-show
            如果不频繁让一个组件显示隐藏，用v-if
        5，使用v-for时，必须加上key 
            一般情况下，不要使用index作为key   1 2 3 4 
            尽可能使用id作为key   [aaa,bbb,ccc]   [ccc,bbb,aaa]
            [{id:"a",value:"aaa"},{id:"b",value:"bbb"},{id:"c",value:"ccc"}]
            [{id:"c",value:"ccc"},{id:"b",value:"bbb"},{id:"a",value:"aaa"}]
            key  值       key   值      dom-diff
            1    aaa      1     ccc
            2    bbb      2     bbb
            3    ccc      3     aaa
            
            key  值       key    值  如果使用id  就不需要重新渲染了
            a    aaa      c    ccc
            b    bbb      b    bbb
            c    ccc      a    aaa
            为什么？减少不必渲染
        6，Object.freeze 
            也会实现数据劫持，冻结
        7，路由懒加载  
            / user  import xxx 
        8，动态导入组件  按需导入   
            improt xx form "xx"   components:{xx}
            components:{
                yyy:()=>import(yyy)
            }
    第二类：加载 
        图片赖加载
        第三方模块按需导入  webpack 

    第三类：提升用户体验
        骨架屏 loading   vue-skeleton-webpack-plugin  vue.conifg.js
        pwa  缓存    弱网  2g  3g     5G  1 1G
        shell  
    
    第四类： SEO
        如果网络环境非常不好，可能出来白屏 
        预渲染  死数据   <div id="app">heelo</div>   通过插件来实现 
        SSR  

    第五类：从后端角度来优化
        缓存  压缩   HTTP xxxx 
---------------------------------------------------------
vue-router原理：
    import Router from "vue-router"
    Vue.use(Router) // 让Vue去使用Router这个插件
    <router-link></router-link>
    <router-view></router-view>
------------------------

function Person(){
    this.name = name;
    this.say = function(){
        console.log(this.name)
    }
}
// mixin 混入 
Person.prototype.jump = function(){
    console.log("jump")
}
let p1 = new Person()
p1.say()
p1.jump()



















