<template>
    <div>
        <p>son1中有:{{money}}块</p>
        <!-- changeMoney() 表示没有实参 -->
        <!-- <button @click="changeMoney()">修改钱</button> -->
        <!-- changeMoney 没有带() 相当于传递了一个事件对象 -->
        <button @click="changeMoney">修改钱</button>
        <hr>
        <!-- <Grandson1 :money="money" @change="change"></Grandson1> -->
        <Grandson1 :money="money" ></Grandson1>
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
                // console.log(e)
                this.$emit("change",10000)
            },
            // change(newValue){
            //     // this.$emit("change",newValue)
            // }
        },
        components: {
            Grandson1
        }
    }
</script>