<template>
    <div>
        <p>grandson1:{{money}}</p>
        <button @click="change">修改钱</button>
    </div>
</template>

<script>
export default {
    props: {
        money:{
            type:Number
        }
    },
    methods: {
        change(){
            // change是自己的属性
            // change的值son1中的change方法
            // this.$emit("change",200)

            this.$parent.$emit("change",2000)
        }
    }
}
</script>