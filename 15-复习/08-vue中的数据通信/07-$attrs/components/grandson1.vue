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
            this.$dispatch("change",30000)
        }
    }
}
</script>