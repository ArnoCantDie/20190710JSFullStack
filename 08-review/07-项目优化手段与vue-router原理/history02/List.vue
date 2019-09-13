<template>
    <div>
        <template v-for="(item,index) in data">
            <!-- 作用域插槽 -->
            <slot :item="item" :key="index"></slot>
        </template>
    </div>
</template>
<script>
// import ListItem from "./ListItem"
export default {
    // components:{
    //     ListItem
    // },
    props:{
        data:{
            type:Array
        }
    }
}
</script>