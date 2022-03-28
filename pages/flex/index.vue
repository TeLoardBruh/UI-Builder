<template>
  <div>
    <div class="flex flex-wrap space-x-4 space-y-4 items-end">
      <div class="flex flex-col">
        {{ itemFlex }}

        <input-lable-with-input
          :label="'Items'"
          :inputType="'range'"
          :name="'item'"
          v-on:emitCurrStateToParent="reciveDataFromChild($event)"
          :placeholder="String(itemFlex)"
          :min="1"
          :max="36"
          :valueRange="itemFlex"
          v-once
        />
      </div>
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
        :name="'flexDirection'"
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
        :class="
          'flex ' +
          'flex-' +
          flexWrapClass +
          ' ' +
          'flex-' +
          flexDirectionClass +
          ' ' +
          'items-' +
          alignItemClass +
          ' ' +
          'content-' +
          contentClass
        "
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
      contentClass: "",
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
      alignItemClass: "",
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
      flexDirectionClass: "",
      flexDirection: [
        {
          id: 0,
          elm: "row",
        },
        { id: 1, elm: "row-reverse" },
        { id: 2, elm: "col" },
        { id: 3, elm: "col-reverse" },
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
  mounted() {
    this.flexWrapClass = "wrap";
    this.flexJustifyClass = "start";
    this.alignItemClass = "start";
    this.contentClass = "start";
    this.flexDirectionClass = "row";
  },
  methods: {
    reciveDataFromChild(recivedData: any) {
      console.log("On top : ", recivedData.name);
      // Do something with the data
      if (recivedData.name === "item") {
        this.itemFlex = Number(recivedData.value)
          ? Number(recivedData.value)
          : this.itemFlex;
      } else if (recivedData.name === "justify") {
        this.flexJustifyClass = recivedData.value;
        this.internalClassArray.push(this.flexJustifyClass);
      } else if (recivedData.name === "flex") {
        this.flexWrapClass = recivedData.value;
      } else if (recivedData.name === "items") {
        this.alignItemClass = recivedData.value;
      } else if (recivedData.name === "content") {
        this.contentClass = recivedData.value;
      } else if (recivedData.name === "flexDirection") {
        this.flexDirectionClass = recivedData.value;
      }
    },
  },
});
</script>
