<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode"
export default {
  created(){
    if(localStorage.eleToken){
      // 解析token
      const decode = jwt_decode(localStorage.eleToken)
      this.$store.commit("setIsAutnentiated",!this.isEmpty(decode))
      this.$store.commit("setUser",decode)
    }
  },
  methods:{
    isEmpty(value){
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0) 
      )
    }
  }
};
</script>

<style>
html,body,#app{
 width:100%;
 height: 100%; 
}
</style>
