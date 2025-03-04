<script setup lang="ts">
import type { AvatarProps } from "~/types/at/avatar";

const props = withDefaults(defineProps<AvatarProps>(), {
  src: null,
  size: "md",
});
const classList = computed(() => {
  return twMerge(
    cva(
      "rounded-full overflow-hidden flex items-center justify-center border bg-white",
      {
        variants: {
          size: {
            xs: "h-8 w-8 text-base",
            sm: "h-12 w-12 text-base",
            md: "h-16 w-16 text-xl",
            lg: "h-24 w-24 text-3xl",
            xl: "h-40 w-40 text-6xl",
          },
        },
      }
    )({
      size: props.size,
    })
  );
});

const fallbackText = props.fallbackString.slice(0, 1);
</script>

<template>
  <div :class="[classList]">
    <UIAtImage v-if="src" :src="src" />
    <div v-else>{{ fallbackText }}</div>
  </div>
</template>
