<template>
  <div id="app">
    <!-- 内容区域 -->
    <div class="container">
      <transition :name="move">
        <router-view></router-view>
      </transition>
    </div>

    <!-- tabbar -->
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler"></cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      move:"slide-left",
      tabs: [
        {
          label: "首页",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "我的电影",
          value: "/movie",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "cubeic-vip"
        }
      ]
    };
  },
  methods: {
    changeHandler(label) {
      // console.log(label)
      this.$router.push(label);
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        // console.log(to)
        // console.log(from)
        if(to && from){
          // 点击了tabbar
          if(to.meta.idx > from.meta.idx){
            this.move = "slide-left"
          }else{
            this.move = "slide-right"
          }
        }
        // console.log("new--->",newValue)
        // console.log("old--->",oldValue)
        this.selectedLabelDefault = to.path;
      },
      immediate: true
    }
  }
};
</script>
<style lang="stylus">
html,body,#app{
  width 100%
  height 100%
}
#app{
  display flex
  flex-direction column
}
.container{
  flex 1
  overflow scroll
}
.footer{
  background-color #ccc
}
.cube-tab{
  i{
    font-size 25px
  }
}

.slide-left-enter-active, .slide-left-leave-active,.slide-right-enter-active, .slide-right-leave-active{
  transition all 0.3s linear;
}
.slide-left-enter-active,.slide-right-enter-active{
  position absolute
  top 0
  left 0 
  width 100%
}

.slide-left-enter{
  transform translate(100%)
}
.slide-left-leave-to{
  transform translate(-100%)
}
.slide-right-enter{
  transform translate(-100%)
}
.slide-right-leave-to{
  transform translate(100%)
}
</style>
// transition 过度动画    transform 变形