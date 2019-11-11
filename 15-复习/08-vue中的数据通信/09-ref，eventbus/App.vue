<template>
    <div>
        <Parent></Parent>
    </div>
</template>

<script>
import Parent from "./components/parent"
export default{
    // 在父组件中提供name数据
    provide(){
        return {
            name:"wangcai"
        }
    },
    components: {
        Parent
    }
}
</script>