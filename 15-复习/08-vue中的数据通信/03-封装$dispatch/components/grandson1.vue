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
            // 还有一个api，叫$dispatch,它会自动向上查找change方法，如果有chage方法就触发
            this.$dispatch("change",30000)
        }
    }
}
</script>