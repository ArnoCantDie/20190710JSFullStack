<template>
  <div>
    <!-- <Slot2>aaaa</Slot2> -->
    <Slot2>
      <template v-slot:content>Hello</template>
    </Slot2>
  </div>
</template>
 
<script>
import Slot2 from "./Slot2.vue";
export default {
  components: {
    Slot2
  }
};
</script>