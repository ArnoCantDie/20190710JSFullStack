<template>
    <div>
        son2--->{{value}}
        <button @click="changeCounter">修改value</button>
    </div>
</template>

<script>
export default{
    props: {
        value:{type:Number}
    },
    methods: {
        changeCounter(){
            // 触发update方法
            this.$emit("input",100)
        }
    }
}
</script>