<template>
    <div>
        son2
        <!-- $listeners里面保存了很多的事件 -->
         <!-- v-on="$listeners" 给Grandson2上面绑定了很多的事件 -->
         <!-- <Son2 @change="change"></Son2> -->
        <!-- <Grandson2 v-on:click="xxx"></Grandson2> -->
        <Grandson2 v-on="$listeners"></Grandson2>

    </div>
</template>

<script>
import Grandson2 from "./grandson2"
export default{
    inheritAttrs: false,
    mounted () {
        // this.$listeners 保存了传递过来的方法
        window.console.log(this.$listeners)
    },
    methods: {
    },
    components: {
        Grandson2
    }
}
</script>