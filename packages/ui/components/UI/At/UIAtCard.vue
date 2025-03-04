<script setup lang="ts">
import type { CardProps } from "~/types/at/card";

const props = withDefaults(defineProps<CardProps>(), {
  padding: "md",
  variant: "default",
  elevation: "sm",
});
const classList = computed(() => {
  return twMerge(
    cva("bg-white rounded-xl border", {
      variants: {
        padding: {
          none: "p-0",
          sm: "px-2 py-4",
          md: "px-6 py-8",
          lg: "px-10 py-12",
          xl: "px-16 py-24",
        },
        variant: {
          default: "",
          surface: "bg-white/75  backdrop-blur-xl",
        },
        elevation: {
          xs: "border-gray-200 shadow-xs drop-shadow-xs",
          sm: "border-gray-200 shadow-sm drop-shadow-sm",
          md: "border-gray-200 shadow-md drop-shadow-md",
          lg: "border-gray-200 shadow-lg drop-shadow-lg",
          none: "border-transparent",
        },
      },
    })({
      padding: props.padding,
      variant: props.variant,
      elevation: props.elevation,
    })
  );
});
</script>

<template>
  <div :class="[classList]">
    <slot />
  </div>
</template>
