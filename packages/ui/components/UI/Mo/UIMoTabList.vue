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
      class="px-2 py-0 aria-selected:after:w-full aria-selected:after:h-2 aria-selected:after:bg-primary"
      :aria-selected="model === item.value"
      @click="model = item.value"
    >
      <UIAtButton variant="link" :text="item.label" />
    </li>
  </UIAtLayoutFlex>
</template>
