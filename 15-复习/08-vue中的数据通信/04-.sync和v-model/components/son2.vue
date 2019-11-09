<template>
    <div>
        son2--->{{value}}
        <!-- <button @click="change1">修改计数</button> -->
        <button @click="change1">修改计数</button>
    </div>
</template>

<script>
export default{
    props: {
        counter:{
            type:Number
        },
        value:{
            type:Number
        }
    },
    methods: {
        // change1(){
        //     this.$emit("change",1000)
        // }
        // change1(){
        //     this.$emit("update:counter",1000)
        // }
        change1(){
            this.$emit("input",1000)
        }
    }
}
</script>