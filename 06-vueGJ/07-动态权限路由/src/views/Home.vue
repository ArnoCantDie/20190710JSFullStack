<template>
  <div>
    <!-- <router-view></router-view> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <template v-for="m in menuList">
        <ReSubMenu :data="m" :key="m.auth" v-if="m.children"></ReSubMenu>
        <el-menu-item v-else :key="m.auth" :index="m.path">{{m.name}}</el-menu-item>
      </template>
    </el-menu>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import ReSubMenu from "./ReSubMenu";
export default {
  name: "home",
  computed: {
    ...mapState(["menuList"])
  },
  components: {
    ReSubMenu
  }
};
</script>