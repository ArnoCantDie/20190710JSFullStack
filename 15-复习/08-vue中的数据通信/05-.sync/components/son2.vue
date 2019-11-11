<template>
    <div>
        son2--->{{counter}}
        <button @click="changeCounter">修改counter</button>
    </div>
</template>

<script>
export default{
    props: {
        counter:{type:Number}
    },
    methods: {
        changeCounter(){
            // 触发update方法
            this.$emit("update:counter",100)
        }
    }
}
</script>