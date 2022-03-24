<template>
  <side-bar />
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "~/components/SideBar.vue";

export default Vue.extend({
  components: { SideBar },
  name: "IndexPage",
  layout: "blog",
});
</script>
