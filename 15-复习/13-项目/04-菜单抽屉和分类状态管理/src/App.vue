<template>
  <div id="app">
    <!-- 内容区域 -->
    <div class="container">
      <router-view></router-view>
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
</style>