<script setup lang="ts">
const menuOptions = [
  {
    label: "Typography",
    value: "KitTypography",
  },
  {
    label: "Buttons",
    value: "KitButtons",
  },
  {
    label: "Chips",
    value: "KitChips",
  },
  {
    label: "Loaders",
    value: "KitLoaders",
  },
  {
    label: "Text input",
    value: "KitInputText",
  },
  {
    label: "Checkboxes",
    value: "KitInputCheckbox",
  },
  {
    label: "Select input",
    value: "KitInputSelect",
  },
  {
    label: "Switch input",
    value: "KitInputSwitch",
  },
];

const activeTab = ref("KitTypography");
const activeComponent = ref();

const setActiveTab = (componentName: string) => {
  activeTab.value = componentName;
  activeComponent.value = defineAsyncComponent(
    async () => await import(`~/components/${activeTab.value}.vue`)
  );
};

setActiveTab("KitTypography");
</script>

<template>
  <div class="pt-16 grid grid-cols-5 gap-6 mx-auto container">
    <UIAtCard class="h-fit col-span-1">
      <ul>
        <li
          v-for="option in menuOptions"
          :key="option.value"
          class="hover:bg-primary p-2 hover:text-white cursor-pointer"
          :class="{ 'text-primary font-semibold': activeTab === option.value }"
          @click="setActiveTab(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </UIAtCard>
    <UIAtCard class="w-full col-span-4">
      <component :is="activeComponent" />
    </UIAtCard>
  </div>
</template>
