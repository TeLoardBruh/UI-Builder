<template>
  <div>
    <input-lable-with-input
      :label="'Type'"
      :inputType="'dropdown'"
      :name="'justify'"
      :dropItem="typeOfCard"
      v-on:emitCurrStateToParent="reciveDataFromChild($event)"
      v-once
    />
    <div class="mt-10">
      <LayoutsCard />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
