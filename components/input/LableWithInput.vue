<template>
  <div v-once>
    <label
      for="small-input"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      v-once
      :value="name"
      v-if="inputType !== 'dropdown'"
      :type="inputType"
      class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @input="emitCurrStateToParent($event)"
    />
    <!-- message = $event.target.value -->
    <select
      v-if="inputType === 'dropdown'"
      class="border border-gray-300 rounded-full text-gray-900 h-10 pl-5 pr-10 bg-gray-50 hover:border-gray-400 focus:outline-none appearance-none"
    >
      <option>Choose an item</option>
      <option>Red</option>
      <option>Blue</option>
      <option>Yellow</option>
      <option>Black</option>
      <option>Orange</option>
      <option>Purple</option>
      <option>Gray</option>
      <option>White</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: true,
    },
    itemDropDown: {
      type: Array,
      required: false,
    },
    name: {
      type: String || Number,
      required: false,
    },
  },
  watch: {
    name(value: any) {
      this.$emit("emitCurrStateToParent", value.target.value);
    },
  },
  methods: {
    emitCurrStateToParent(event: any) {
      this.$emit("emitCurrStateToParent", event.target.value);
    },
  },
});
</script>
