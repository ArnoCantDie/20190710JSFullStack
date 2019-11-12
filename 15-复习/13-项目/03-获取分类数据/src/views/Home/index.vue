<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        {{categories}}
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader"
// import { mapActions } from "vuex"
import { createNamespacedHelpers } from "vuex"
import {ajaxCategory} from "@/api/home.js"
let { mapActions,mapState } = createNamespacedHelpers("home")
export default{
    // create和mounted都可以发起ajax
    // 有时候调用接口时，会调用多次
    // created(){
        // ajaxCategory().then(data=>{
        //     console.log(data)
        // })
        // this.$store.dispatch("home/setCategories")
    // },
    methods:{
        // ...mapActions('home',['setCategories'])
        ...mapActions(['setCategories'])
    },
    computed:{
        ...mapState(['categories'])
    },
    mounted(){
        // 仅仅是调接口
        this.setCategories();
    },
    components:{
        HomeHeader
    },
}
</script>
<style lang="stylus">

</style>