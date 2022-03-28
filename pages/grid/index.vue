<template>
  <div>
    <div class="flex flex-wrap space-x-4 space-y-4 items-end">
      <div class="flex flex-col">
        {{ itemColumns }}
        <input-lable-with-input
          :label="'Columns'"
          :inputType="'range'"
          :name="'columns'"
          v-on:emitCurrStateToParent="reciveDataFromChild($event)"
          :placeholder="String(itemColumns)"
          :min="1"
          :max="3"
          :valueRange="itemColumns"
          v-once
        />
      </div>
      <div class="flex flex-col">
        {{ itemRows }}
        <input-lable-with-input
          :label="'Rows'"
          :inputType="'range'"
          :name="'rows'"
          v-on:emitCurrStateToParent="reciveDataFromChild($event)"
          :placeholder="String(itemRows)"
          :min="1"
          :max="4"
          :valueRange="itemRows"
          v-once
        />
      </div>
    </div>
    <div class="bg-gray-300 w-full lg:w-4/5 h-80 mt-10">
      <LayoutsGrid
        :itemColumns="itemColumns"
        :itemRows="itemRows"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
