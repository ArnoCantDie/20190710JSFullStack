<template>
    <div>
        <p>son1中有:{{money}}块</p>
        <button @click="changeMoney()">修改钱</button>
    </div>
</template>

<script>
    export default{
        // 现在Son1身上就有一个money，在Son1上就可以使用了
        props: {
            money:{
                type:Number
            }
        },
        // 现在子中就有一个方法了：change
        // 让子触发这个方法：$emit("change-item",1000)
        methods: {
            changeMoney(){
                // 在vue中不能直接去修改props中的数据
                // this.money = 100000;

                this.$emit("change",10000)
            }
        }
    }
</script>