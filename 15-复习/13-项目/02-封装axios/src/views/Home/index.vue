<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <ul>
            <li>1</li>
        </ul>
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader"
import {ajaxCategory} from "@/api/home.js"
export default{
    // create和mounted都可以发起ajax
    // 有时候调用接口时，会调用多次
    created(){
        ajaxCategory().then(data=>{
            console.log(data)
        })
    },
    components:{
        HomeHeader
    }
}
</script>
<style lang="stylus">

</style>