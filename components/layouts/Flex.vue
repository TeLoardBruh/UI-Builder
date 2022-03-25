<template>
  <div :class="'justify-'+internalClass[internalClass.length - 1]">
    <div
      class="bg-green-400 w-14 h-14 m-2 flex items-center justify-center"
      v-for="item in items"
      :key="item"
    >
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
    internalClass: {
      type: Array,
      required: false,
    },
  },
});
</script>
