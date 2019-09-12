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




