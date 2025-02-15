<script setup lang="ts">
const value = ref(false);
</script>

<template>
  <KitWrapper class="flex-col gap-12">
    <UIAtInputSwitch
      :value="value"
      label="switch the value"
      name="my switch"
      @update:modelValue="value = !value"
    />
    <UIAtInputSwitch
      :value="value"
      label="switch the value"
      name="my switch"
      labelPosition="top"
      @update:modelValue="value = !value"
    />
    <UIAtInputSwitch
      :value="value"
      label="switch the value"
      name="my switch"
      labelPosition="bottom"
      @update:modelValue="value = !value"
    />
    <UIAtInputSwitch
      :value="value"
      label="switch the value"
      name="my switch"
      labelPosition="left"
      @update:modelValue="value = !value"
    />
  </KitWrapper>
</template>
