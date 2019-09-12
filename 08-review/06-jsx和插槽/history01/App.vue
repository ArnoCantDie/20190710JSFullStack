<template>
  <div id="app">
    <Test4 :data="['HTML','CSS','JS']" :render="render"></Test4>
  </div>
</template>
<script>
import Test4 from "./Test4"
export default{
  methods:{
    render(h,data){
      return <p>{data}</p>
    }
  },
  components:{
    Test4
  }
}
</script>

