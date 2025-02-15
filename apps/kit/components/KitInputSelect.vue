<script setup lang="ts">
const options = [
  {
    value: "hi",
    label: "Who",
  },
  {
    value: "hii",
    label: "What",
  },
  {
    value: "hiii",
    label: "Where",
  },
];

const value1 = ref(null);
</script>

<template>
  <KitWrapper>
    <UIAtInputSelect
      :options="options"
      label="Choose one"
      placeholder="---"
      name="choose one"
      v-model="value1"
    />
  </KitWrapper>
</template>
