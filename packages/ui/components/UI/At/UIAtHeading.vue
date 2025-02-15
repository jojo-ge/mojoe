<script setup lang="ts">
import type { HeadingProps } from "~/types/at/heading";

const props = withDefaults(defineProps<HeadingProps>(), {
  fontStyle: "body",
});

const classList = computed(() => {
  return twMerge(
    cva("", {
      variants: {
        size: {
          h1: "text-7xl font-semibold",
          h2: "text-6xl font-semibold",
          h3: "text-4xl font-semibold",
          h4: "text-3xl",
          h5: "text-xl",
          h6: "text-lg",
        },
        fontStyle: {
          body: "font-body",
          display: "font-display",
        },
      },
    })({
      size: props.size,
      fontStyle: props.fontStyle,
    })
  );
});
</script>

<template>
  <component :is="size" :class="[classList]">{{ text }}</component>
</template>
