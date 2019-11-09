<template>
    <div>
        Parent中有：{{money}}块钱
        <hr>
        <Son1 :money="money" @change="change"></Son1>
    </div>
</template>

<script>
import Son1 from "./son1"
export default{
    data(){
        return{
            money:100
        }
    },
    methods: {
      change(newValue){
          this.money = newValue
      }  
    },
    components: {
        Son1
    }
}
</script>