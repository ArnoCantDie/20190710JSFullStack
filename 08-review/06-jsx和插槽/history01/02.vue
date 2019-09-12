<template>
  <div id="app">
    <Test2 :n="1">App</Test2>
    <Test2 :n="2">App</Test2>
    <Test2 :n="3">App</Test2>
    <Test2 :n="4">App</Test2>
    <Test2 :n="5">App</Test2>
  </div>
</template>
<script>
import Test from "./Test"
import Test2 from "./Test2"
export default{
  components:{
    Test2
  }
}
</script>

