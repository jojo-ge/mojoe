<script setup lang="ts">
import type { MenuProps } from "~/types/mo/menu";
defineProps<MenuProps>();

const model = defineModel<string>({ required: true });
const id = useId();
</script>

<template>
  <UIAtCard padding="none" class="min-w-48 overflow-hidden">
    <UIAtLayoutFlex spacing="none" direction="col" :list="true">
      <li
        v-for="(item, index) in menuItems"
        :key="`${id}-${index}`"
        @click="model = item.value"
        class="px-2 py-1 hover:bg-primary-200 aria-selected:bg-primary aria-selected:*:text-white"
        :aria-selected="model === item.value"
      >
        <UIAtButton :text="item.label" variant="link" />
      </li>
    </UIAtLayoutFlex>
  </UIAtCard>
</template>
