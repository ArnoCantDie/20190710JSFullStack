<template>
    <div>
        <List :data="['html','css','js','vue','react']" :render="render">
            
        </List>
    </div>
</template>
<script>
import List from "./List"
export default {
    methods:{
        render(h,item){
            return <h1>{item}</h1>
        }
    },
    components:{
        List
    }
}
</script>