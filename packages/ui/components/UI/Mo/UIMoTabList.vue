<script setup lang="ts">
import type { TabListProps } from "~/types/mo/tablist";

defineProps<TabListProps>();
const id = useId();

const model = defineModel<string>({ required: true });
</script>

<template>
  <UIAtLayoutFlex :list="true" spacing="xs" direction="row">
    <li
      v-for="(item, index) in tabListItems"
      :key="`${id}-${index}`"
      class="px-2 py-0 relative aria-selected:after:w-full aria-selected:after:h-1 aria-selected:after:bg-primary aria-selected:after:block aria-selected:after:rounded-full aria-selected:after:absolute aria-selected:after:bottom-0 aria-selected:after:inset-x-0"
      :aria-selected="model === item.value"
      @click="model = item.value"
    >
      <UIAtButton variant="link" :text="item.label" />
    </li>
  </UIAtLayoutFlex>
</template>
