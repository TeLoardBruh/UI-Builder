<template>
  <div class="">
    <div class="bg-green-400 w-14 h-14 m-2 flex items-center justify-center" v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    items: {
      type: Number as any,
      required: false,
    },
  },
});
</script>
