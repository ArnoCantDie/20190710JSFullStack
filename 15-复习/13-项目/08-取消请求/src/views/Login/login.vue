<template>
    <div>
        <ul>
            <li>
                用户名：<input type="text" name="username">
            </li>
            <li>
                密码：<input type="text" name="pwd">
            </li>
            <button @click="f">登录</button>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState} from "vuex"
import * as types from "@/store/actions-type"
export default{
    methods:{
        ...mapActions([types.LOGIN]),
        f(){
            let res = this[types.LOGIN](user)
        }
    },
    computed: {
        ...mapState(["user"])
    }
}
</script>

