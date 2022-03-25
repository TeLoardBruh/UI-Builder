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
        :name="'justify'"
        :dropItem="content"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />
      <input-lable-with-input
        :label="'Align Items'"
        :name="'items'"
        :inputType="'dropdown'"
        :dropItem="alignItem"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />
      <input-lable-with-input
        :label="'Align content'"
        :name="'content'"
        :inputType="'dropdown'"
        :dropItem="content"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />
      <input-lable-with-input
        :label="'Flex Direction'"
        :inputType="'dropdown'"
        :dropItem="flexDirection"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />

      <input-lable-with-input
        :label="'Flex Wrap'"
        :inputType="'dropdown'"
        :name="'flex'"
        :dropItem="flexWraper"
        v-on:emitCurrStateToParent="reciveDataFromChild($event)"
        v-once
      />
    </div>
    <div class="bg-gray-300 w-full lg:w-4/5 h-80 mt-10">
      <layouts-flex
        :items="itemFlex"
        :class="'flex ' + 'flex-' + flexWrapClass"
        :internalClass="internalClassArray"
      />
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
      internalClassArray: [] as any,
      flexJustifyClass: "",
      content: [
        {
          id: 0,
          elm: "start",
        },
        {
          id: 1,
          elm: "end",
        },
        {
          id: 2,
          elm: "center",
        },
        {
          id: 3,
          elm: "between",
        },
        {
          id: 4,
          elm: "around",
        },
        {
          id: 5,
          elm: "evenly",
        },
      ],
      alignItem: [
        {
          id: 0,
          elm: "start",
        },
        {
          id: 1,
          elm: "end",
        },
        {
          id: 2,
          elm: "center",
        },
        {
          id: 3,
          elm: "baseline",
        },
        {
          id: 4,
          elm: "stretch",
        },
      ],
      flexDirection: [
        {
          id: 0,
          elm: "flex-row",
        },
        { id: 1, elm: "flex-row-reverse" },
        { id: 2, elm: "flex-col" },
        { id: 3, elm: "flex-col-reverse" },
      ],
      flexFlow: "",
      flexWrap: "",
      flexWrapClass: "",
      flexWraper: [
        {
          id: 0,
          elm: "wrap",
        },
        {
          id: 1,
          elm: "nowrap",
        },
        {
          id: 2,
          elm: "wrap-reverse",
        },
      ],
    };
  },
  created() {},
  methods: {
    reciveDataFromChild(recivedData: any) {
      // Do something with the data
      this.itemFlex = Number(recivedData) ? Number(recivedData) : this.itemFlex;
      this.flexWrapClass = Number(recivedData) ? "" : recivedData;
      this.flexJustifyClass = Number(recivedData) ? "" : recivedData;
      this.internalClassArray.push(this.flexJustifyClass);
      console.log("FFrom parenet : ", recivedData);
    },
  },
});
</script>
