<template>
    <div>
        Parent---->{{counter}}
        <hr>
        
        <!-- <button @click="show">show</button> -->

        <!-- 能直接给组件加上面加一个原生的事件吗？ 答：不能 -->
         <!-- @click="show" 默认是指传递方法，并不指原生的click-->
        <!-- <Son2 @click="show">show</Son2> -->

        <!-- click如果要当作原生的click，需要加上native -->
        <!-- <Son2 @click.native="show">show</Son2> -->

        <!-- 给Son2传递一个方法 -->
         <!-- ref="son2" 要拿到Son2组件真实的DOM元素 -->
        <Son2 ref="son2" :counter="counter" :money="money" @click="show" @mousedown="show">show</Son2>
    </div>
</template>

<script>
import Son2 from "./son2"
export default{
    mounted () {
          this.$refs.son2.sayHello();
          this.$bus.$on("change",function(){
              window.console.log("change.....")
          })
    },
     provide(){
        return {
            name:"xiaoqiang"
        }
    },
    data(){
        return{
            counter:1,
            money:2
        }
    },
    methods: {
        show(){
            window.console.log("show....")
        }
    },
    components: {
        Son2
    }
}
</script>