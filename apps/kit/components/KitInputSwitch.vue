<script setup lang="ts">
const value = ref(false);
</script>

<template>
  <KitWrapper>
    <UIAtInputSwitch
      :value="value"
      label="switch the value"
      name="my switch"
      @update:modelValue="value = !value"
    />
  </KitWrapper>
</template>
