<script setup lang="ts">
const options = [
  {
    value: "who",
    label: "Who",
  },
  {
    value: "what",
    label: "What",
  },
  {
    value: "where",
    label: "Where",
  },
  {
    value: "when",
    label: "When",
  },
  {
    value: "how",
    label: "How",
  },
  {
    value: "why",
    label: "Why",
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
