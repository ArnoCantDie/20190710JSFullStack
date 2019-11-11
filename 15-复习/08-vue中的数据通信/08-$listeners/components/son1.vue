<template>
    <div>
        <p>son1中有:{{money}}块</p>
        <button @click="changeMoney">修改钱</button>
        <hr>
        <Grandson1 :money="money"></Grandson1>
    </div>
</template>

<script>
    import Grandson1 from "./grandson1"
    export default{
        props: {
            money:{
                type:Number
            }
        },
        methods: {
            changeMoney(){
                this.$emit("change",10000)
            },
        },
        components: {
            Grandson1
        }
    }
</script>