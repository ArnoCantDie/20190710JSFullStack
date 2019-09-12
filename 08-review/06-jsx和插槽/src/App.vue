<template>
  <div>
      <Slot>
          <template v-slot:default="ctx">
               来自子组件数据：{{ctx.foo}}
          </template>
      </Slot>
  </div>
</template>

<script>
import Slot from "./Slot.vue";

export default {
  components: {
    Slot,
  }
};
</script>