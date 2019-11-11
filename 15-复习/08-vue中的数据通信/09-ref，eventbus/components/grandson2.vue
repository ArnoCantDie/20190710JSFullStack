<template>
    <div>
        grandson2--->{{$attrs}}---->{{name}}
        <button @click="$listeners.click">grandson2Btn</button>
        <button @mousedown="$listeners.mousedown">MouseDown</button>
    </div>
</template>
<script>
export default{
    inject:['name'],
    mounted () {
        this.$nextTick(()=>{
            // 发布
            this.$bus.$emit("change")
        })
    }
}
</script>