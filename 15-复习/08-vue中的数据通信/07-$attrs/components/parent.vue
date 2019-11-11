<template>
    <div>
        Parent---->{{counter}}
        <hr>
        <!-- <Son2 :value="counter" :money="money" @input="newValue=>counter = newValue"></Son2> -->
        <!-- <Son2 v-model="counter" :money="money"></Son2> -->

        <!-- :counter="counter" :money="money"  {counter:1,money:1} -->
        <Son2 :counter="counter" :money="money"></Son2>
    </div>
</template>

<script>
import Son2 from "./son2"
export default{
    data(){
        return{
            counter:1,
            money:2
        }
    },
    methods: {
    },
    components: {
        Son2
    }
}
</script>