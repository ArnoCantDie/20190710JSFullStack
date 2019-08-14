<template>
<li>
    <div @click="toggle">
        {{model.title}}
        <span v-if="isFolder">{{open ? "-" : "+"}}</span>
    </div>
    <ul v-show="open">
        <tree v-for="model in model.children" :key="model.title" :model="model"></tree>
    </ul>
</li>
</template>
<script>
export default {
    name:"Tree",
    data(){
        return{
            open:false
        }
    },
    // computed是基于watch和缓存
    computed:{
        isFolder(){
            return this.model.children && this.model.children.length
        }
    },
    props:{
        model:{
            type:Object,
            required:true
        }
    },
    methods:{
        toggle(){
            if(this.isFolder){
                this.open = !this.open;
            }
        }
    }
}
</script>