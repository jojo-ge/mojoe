<script setup lang="ts">
import { buttonConfig } from "~/config/button";
import { inputTextConfig } from "~/config/input/text";

const componentMenu = {
  UIAtButton: {
    label: "Button",
    path: "At",
    value: "UIAtButton",
    config: buttonConfig,
  },
  UIAtInputText: {
    label: "Input",
    path: "At",
    value: "UIAtInputText",
    config: inputTextConfig,
  },
};

const menuOptions = computed(() => {
  return Object.values(componentMenu).map((component) => ({
    label: component.label,
    value: component.value,
  }));
});

const activeComponentKey = ref<keyof typeof componentMenu>("UIAtInputText");

const activeComponent = computed(() => {
  return componentMenu[activeComponentKey.value];
});

const loading = ref(false);
watch(activeComponentKey, () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <div>
    <UIAtInputSelect
      label="Component"
      name="component"
      :options="menuOptions"
      placeholder="Select a component..."
      v-model="activeComponentKey"
    />
    <ComponentRenderer
      v-if="!loading"
      :key="activeComponentKey"
      :path="activeComponent.path"
      :componentName="activeComponent.value"
      :componentConfig="activeComponent.config"
    />
  </div>
</template>
