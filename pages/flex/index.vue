<template>
  <div>
    <div class="flex flex-wrap space-x-4 space-y-4 items-end">
      <input-lable-with-input
        :label="'Items'"
        :inputType="'number'"
        :name="'item'"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />
      <input-lable-with-input
        :label="'Justify Content'"
        :inputType="'dropdown'"
        v-model="justify"
      />
      <input-lable-with-input
        :label="'Align Items'"
        :inputType="'dropdown'"
        v-model="alignItem"
      />
      <input-lable-with-input
        :label="'Align content'"
        :inputType="'dropdown'"
        v-model="alignContent"
      />
      <input-lable-with-input
        :label="'Flex Direction'"
        :inputType="'dropdown'"
        v-model="flexDirection"
      />
      <input-lable-with-input
        :label="'Flex Flow'"
        :inputType="'dropdown'"
        v-model="flexFlow"
      />
      <input-lable-with-input
        :label="'Flex Wrap'"
        :inputType="'dropdown'"
        v-model="flexWrap"
      />
    </div>
    <div class="bg-gray-300 w-full lg:w-4/5 h-80 mt-10">
      <layouts-flex :items="itemFlex" class="flex" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      item: 0,
      itemFlex: 8,
      justify: "",
      alignItem: "",
      alignContent: "",
      flexDirection: "",
      flexFlow: "",
      flexWrap: "",
    };
  },
  created() {},
  methods: {
    reciveDataFromChild(recivedData: any) {
      // Do something with the data
      this.itemFlex = Number(recivedData);
      console.log("FFrom parenet : ", recivedData);
    },
  },
});
</script>
