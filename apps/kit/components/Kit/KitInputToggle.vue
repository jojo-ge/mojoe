<script setup lang="ts">
const value = ref(false);
</script>

<template>
  <KitWrapper class="flex-col gap-12">
    <UIAtInputToggle
      :value="value"
      label="Toggle the value"
      name="my Toggle"
      @update:modelValue="value = !value"
    />
    <UIAtInputToggle
      :value="value"
      label="Toggle the value"
      name="my Toggle"
      labelPosition="top"
      @update:modelValue="value = !value"
    />
    <UIAtInputToggle
      :value="value"
      label="Toggle the value"
      name="my Toggle"
      labelPosition="bottom"
      @update:modelValue="value = !value"
    />
    <UIAtInputToggle
      :value="value"
      label="Toggle the value"
      name="my Toggle"
      labelPosition="left"
      @update:modelValue="value = !value"
    />
  </KitWrapper>
</template>
