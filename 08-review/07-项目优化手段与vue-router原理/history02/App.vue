<template>
  <div>
    <List :data='["vue","react","node","koa","express"]'>
      <template v-slot="{item}">
        <span>{{item}}</span>
      </template>
    </List>
  </div>
</template>

<script>
import List from "./List"
export default {
  components: {
    List
  }
};
</script>