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
          :max="21"
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

<script lang="ts" src="./index.ts"></script>
