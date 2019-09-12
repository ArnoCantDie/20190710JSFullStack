<template>
    <div>
        <!-- 作用域插槽 -->
        <slot :foo="foo"></slot>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                foo: 'bar'
            }
        },
    }
</script>