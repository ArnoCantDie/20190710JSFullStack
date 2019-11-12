<template>
    <div class="home">
        <HomeHeader :categories="categories" @change="change"></HomeHeader>
        {{categories}}
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
        ...mapActions([types.SET_CATEGORIES]),
        ...mapMutations([types.SET_CURRENT_MOVIE]),
        change(value){
            // console.log(value[0])
            this[types.SET_CURRENT_MOVIE](value[0])
        }
    },
    computed:{
        ...mapState(['categories'])
    },
    mounted(){
        this[types.SET_CATEGORIES]();
    },
    components:{
        HomeHeader
    },
}
</script>
<style lang="stylus">
</style>