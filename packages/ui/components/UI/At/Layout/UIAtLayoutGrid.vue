<script setup lang="ts">
import type { LayoutGridProps } from "~/types/at/layout/grid";

const props = defineProps<LayoutGridProps>();

const columns = [
  "grid-cols-1",
  "grid-cols-1",
  "grid-cols-1",
  "grid-cols-1",
  "grid-cols-1",
  "grid-cols-1",
  "grid-cols-1",
];
const colCount = computed(() => {
  return columns[props.cols - 1];
});
</script>

<template>
  <div class="grid" :class="[colCount]">
    <slot />
  </div>
</template>
