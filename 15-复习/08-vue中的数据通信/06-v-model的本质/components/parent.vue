<template>
    <div>
        Parent---->{{counter}}
        <hr>
        <!-- <Son2 :value="counter" @input="newValue=>counter = newValue"></Son2> -->

        <!-- 如果在一个组件上面写了一个v-model，其实是给这个子组件传递了个value属性和一个input方法 -->
        <!-- value和input是不能改变名字 -->
        <Son2 v-model="counter"></Son2>
    </div>
</template>

<script>
import Son2 from "./son2"
export default{
    data(){
        return{
            counter:1
        }
    },
    methods: {
    },
    components: {
        Son2
    }
}
</script>