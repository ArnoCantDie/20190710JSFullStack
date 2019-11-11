<template>
    <div>
        Parent---->{{counter}}
        <hr>
        <!-- <Son2 :counter="counter" @update:counter="changeCounter"></Son2> -->
        <!-- <Son2 :counter="counter" @update:counter="newValue=>counter = newValue"></Son2> -->
        <Son2 :counter.sync="counter"></Son2>

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
        // 修改状态
        // changeCounter(newValue){
        //     this.counter = newValue;
        // }
    },
    components: {
        Son2
    }
}
</script>