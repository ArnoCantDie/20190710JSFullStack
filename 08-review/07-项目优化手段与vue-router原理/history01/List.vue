<template>
    <div>
        
        <template v-for="(item,index) in data">
            <li v-if="!render" :key="index">{{item}}</li>
            <ListItem v-else :key="index" :render="render" :item="item"></ListItem>
        </template>
    </div>
</template>

<script>
import ListItem from "./ListItem"
export default{
    props:{
        data:{
            type:Array
        },
        render:{
            type:Function
        }
    },
    components:{
        ListItem
    }
}
</script>