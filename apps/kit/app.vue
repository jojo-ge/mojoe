<script setup lang="ts">
const menuOptions = {
  atoms: [
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
    {
      label: "Cards",
      value: "KitCards",
    },
  ],
  molecules: [],
  organisms: [],
};

const mainTabs = [
  {
    label: "Atoms",
    value: "atoms",
  },
  {
    label: "Molecules",
    value: "molecules",
  },
  {
    label: "Organisms",
    value: "organisms",
  },
];

const activeMainTab = ref("atoms");

const activeTab = ref("KitTypography");
const activeComponent = shallowRef();

const setActiveTab = (componentName: string) => {
  activeTab.value = componentName;
  activeComponent.value = defineAsyncComponent(
    async () => await import(`~/components/${activeTab.value}.vue`)
  );
};

const menuTitle = computed(() => {
  return mainTabs.find((e) => e.value === activeMainTab.value)?.label;
});

setActiveTab("KitTypography");
</script>

<template>
  <div class="pt-16 grid grid-cols-5 gap-6 mx-auto container">
    <UIAtHeading
      size="h1"
      styleSize="h1"
      text="MoJoe Design System"
      class="font-display text-primary col-span-5"
    />
    <div class="col-span-5">
      <ul class="flex gap-6">
        <li
          v-for="tab in mainTabs"
          :key="tab.value"
          @click="activeMainTab = tab.value"
        >
          <UIAtChip
            class="cursor-pointer"
            :text="tab.label"
            :variant="activeMainTab === tab.value ? 'primary' : 'outline'"
          />
        </li>
      </ul>
    </div>
    <UIAtCard class="h-fit col-span-1 overflow-hidden" padding="none">
      <UIAtHeading
        size="h3"
        styleSize="h3"
        :text="menuTitle"
        class="text-primary mx-4 mt-6 mb-3"
      />
      <ul>
        <li
          v-for="option in menuOptions[<keyof typeof menuOptions>activeMainTab]"
          :key="option.value"
          class="hover:bg-primary p-2 hover:text-white cursor-pointer px-6"
          :class="{ 'text-primary font-semibold': activeTab === option.value }"
          @click="setActiveTab(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </UIAtCard>
    <div class="w-full col-span-4">
      <UIAtCard variant="surface" class="w-full">
        <component :is="activeComponent" />
      </UIAtCard>
    </div>
  </div>
  <div class="fixed inset-0 -top-200 -z-200 flex justify-center items-start">
    <div
      class="bg-radial from-secondary from-10% to-transparent to-50% h-400 w-400"
    />
  </div>
</template>
