<script setup lang="ts">
import type { CardProps } from "~/types/at/card";

const props = withDefaults(defineProps<CardProps>(), {
  padding: "md",
  variant: "default",
});
const classList = computed(() => {
  return twMerge(
    cva("bg-white shadow-lg drop-shadow-lg  rounded-xl", {
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
      },
    })({
      padding: props.padding,
      variant: props.variant,
    })
  );
});
</script>

<template>
  <div :class="[classList]">
    <slot />
  </div>
</template>
