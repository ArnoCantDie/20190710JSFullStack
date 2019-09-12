<template>
  <div id="app">
    <!-- <Test :n="1">App</Test>
    <Test :n="2">App</Test>
    <Test :n="3">App</Test>
    <Test :n="4">App</Test> -->

    <!-- <Test2></Test2> -->

    <Test2 :n="1"></Test2>
  </div>
</template>
<script>
// 模块化的发展史  ESmodule  commont规范 
// 异步的发展史
import Test from "./Test"
import Test2 from "./Test2"
export default{
  components:{
    Test,
    Test2
  }
}
</script>

