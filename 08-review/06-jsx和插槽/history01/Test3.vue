<template>
    <div>
        <template v-for="(item,index) in data">
            <span :key="index" href="">{{item}}</span>
        </template>
    </div>
</template>

<script>
export default{
    props:{
        data:{
            type:Array
        }
    }
}
</script>