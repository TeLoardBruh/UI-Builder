<template>
  <div>
    <div
      :class="
        'grid' + ' ' + 'grid-cols-' + itemRows + ' ' + 'gap-4 text-center'
      "
      v-for="column in itemColumns"
      :key="column"
    >
      <div
        class="bg-green-400 p-4 rounded m-4"
        v-for="row in itemRows"
        :key="row"
      >
        {{ row }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    itemRows: {
      type: Number as any,
      required: false,
    },
    itemColumns: {
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
