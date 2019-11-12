<template>
    <div class="home">
        <!-- 首页的头部 -->
        <HomeHeader :categories="categories" @change="change"></HomeHeader>
        <!-- 轮播图 -->
        <div>
            <cube-slide :data="slides"/>
        </div>
        <!-- 滚动区域 -->
        
    </div>
</template>
<script>
import HomeHeader from "./HomeHeader"
import { createNamespacedHelpers } from "vuex"
import * as types from "../../store/actions-type.js"
import {ajaxCategory} from "@/api/home.js"
let { mapActions,mapState,mapMutations } = createNamespacedHelpers("home")
export default{
    methods:{
        ...mapActions([types.SET_CATEGORIES,types.SET_SLIDES]),
        ...mapMutations([types.SET_CURRENT_MOVIE]),
        change(value){
            // console.log(value[0])
            this[types.SET_CURRENT_MOVIE](value[0])
        }
    },
    computed:{
        ...mapState(['categories','slides'])
    },
    mounted(){
        this[types.SET_CATEGORIES]();
        this[types.SET_SLIDES]();
    },
    components:{
        HomeHeader
    },
}
</script>
<style lang="stylus">
.cube-slide-item{
    width 100%
    height 200px
}
</style>