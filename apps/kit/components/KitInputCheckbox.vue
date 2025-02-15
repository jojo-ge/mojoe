<script setup lang="ts">
const box1 = ref(false);
const box2 = ref(true);
</script>

<template>
  <KitWrapper>
    <div class="flex flex-col gap-12">
      <UIAtInputCheckbox
        label="left label"
        name="checkbox"
        :value="box2"
        @update:modelValue="box2 = !box2"
      />
      <UIAtInputCheckbox
        label="bottom label"
        name="bottom label"
        :value="box2"
        @update:modelValue="box2 = !box2"
        labelPosition="bottom"
      />
      <UIAtInputCheckbox
        label="top label"
        name="top label"
        :value="box2"
        @update:modelValue="box2 = !box2"
        labelPosition="top"
      />
      <UIAtInputCheckbox
        label="right label"
        name="checkbox"
        :value="box2"
        @update:modelValue="box2 = !box2"
        labelPosition="right"
      />
    </div>
  </KitWrapper>
</template>
