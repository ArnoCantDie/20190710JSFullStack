<template>
  <div class="home">
    <!-- 首页的头部 -->
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
    <!-- 轮播图 -->
    <div class="home-slide">
      <cube-slide :data="slides" />
    </div>
    <!-- 滚动区域 -->
    <div class="home-wrapper">
      <cube-recycle-list class="list" ref="list" :size="size" :on-fetch="onAjax" :offset="offset">
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item">
            <!-- {{data}} -->
            <h2 style="font-weight:bold; text-align:center">{{data.title}}</h2>
            <img :src="data.pic" alt="">
            <p style="text-align:center">{{data.info}}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
    <!-- {{onAjax()}} -->
    <!-- {{movieList}} -->
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import { createNamespacedHelpers } from "vuex";
import * as types from "../../store/actions-type.js";
import { ajaxMovieList } from "@/api/home.js";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");
export default {
  data() {
    // 放在data中的数据都是可以被侦测，如果页面上有一些数据，不想被侦测，可以放在create中
    return {
      size: 3,
      offset: 100,
    //   movieList: []
    };
  },
  created() {
    this.offsetIndex = 0; // 如果数据不放在data中，是会被侦测
    this.hasMore = true; // 后面还有数据
  },
  methods: {
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(value) {
      // console.log(value[0])
      this[types.SET_CURRENT_MOVIE](value[0]);
      this.hasMore = true;// 当点击了菜单，把hasMore置为ture
      this.offsetIndex = 0;  // 当点击了菜单，把偏移量置为0
      this.$refs.list.reset() // 清空列表
    },
    // 定义一个方法，用来获取电影数据
    async onAjax() {
      if (this.hasMore) {
        let { result, hasMore } = await ajaxMovieList(
          this.size,
          this.offsetIndex
        );
        this.hasMore = hasMore;
        this.offsetIndex = this.offsetIndex + result.length;
        // this.movieList = result;
        return result;
      } else {
        return false;
      }
    },
  },
  activated(){
    let position = sessionStorage.getItem("position") || 0
    this.$refs.list.$el.scrollTop = position;
  },
  deactivated(){},
  computed: {
    ...mapState(["categories", "slides"])
  },
  mounted() {
    this[types.SET_CATEGORIES]();
    this[types.SET_SLIDES]();
    // this.onAjax(); // 获取电影列表

    // console.log(this.$refs.list.$el)
    // 防抖  定时器
    let timer;
    this.$refs.list.$el.addEventListener("scroll",(e)=>{
      // console.log("----",e.target.scrollTop)
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
          // console.log(e.target.scrollTop)
          sessionStorage.setItem("position",e.target.scrollTop)
      },75)
    });
  },
  components: {
    HomeHeader
  }
};
</script>
<style lang="stylus" scoped>
img{
    width 100%
    max-width 100%
}
.home{
    &-slide{
        width 100%
        height 150px
    }
    &-wrapper{
        height calc(100vh - 300px)
        width 80% 
        margin 0 auto
        .item{
            display flex
            flex-direction column
            border 2px solid #ccc
            margin 10px
            justify-content center
            height 250px
            img{
                width 100%
            }
        }
    }
}
</style>