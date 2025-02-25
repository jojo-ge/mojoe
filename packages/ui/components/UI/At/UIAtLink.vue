<script setup lang="ts">
import type { LinkProps } from "~/types/at/link";

defineProps<LinkProps>();
const classList = computed(() => {
  return twMerge(
    cva("", {
      variants: {},
    })({})
  );
});
</script>

<template>
  <NuxtLink :to="to" :class="classList">
    <slot />
  </NuxtLink>
</template>
