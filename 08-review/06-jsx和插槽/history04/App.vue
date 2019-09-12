<template>
<div>
    <Slot1>
        <template v-slot:default>1234567890</template>
    </Slot1>
</div>
</template>

<script>
import Slot1 from "./Slot1.vue";
export default {
  components: {
    Slot1
  }
};
</script>