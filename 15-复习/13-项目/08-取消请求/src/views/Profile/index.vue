<template>
    <div class="movie">
            <button @click="toLogin">登录</button>
    </div>
</template>


<script>

export default{
    methods:{
        toLogin(){
            this.$router.push("/login")
        }
    }
}

</script>

<style lang="stylus">

</style>