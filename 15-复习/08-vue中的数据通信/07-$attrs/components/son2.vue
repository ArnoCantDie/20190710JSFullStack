<template>
    <div>
        <!-- son2---》{{counter}}---》monty----》{{money}} -->
        {{$attrs}}
        <!-- 表示将数据全部传递下去 -->
        <Grandson2 v-bind="$attrs"></Grandson2>
        <button @click="changeCounter">修改value</button>
    </div>
</template>

<script>
// 除了使用props来接收数据之外，还可以使用$attrs，如果使用$attrs，最终传递过来的数据会作为真正属性
// 如何使用$attrs，就不能再使用props
// inheritAttrs: false, 可以把传递过来的属性不作为标签真正有属性

import Grandson2 from "./grandson2"
export default{
    inheritAttrs: false,
    // props: {
    //     // value:{type:Number},
    //     counter:{type:Number},
    //     money:{type:Number}
    // },
    methods: {
        changeCounter(){
            // 触发update方法
            // this.$emit("input",100)
        }
    },
    components: {
        Grandson2
    }
}
</script>