<script setup lang="ts">
import type { LayoutFlexProps } from "~/types/at/layout/flex";

const props = withDefaults(defineProps<LayoutFlexProps>(), {
  direction: "row",
  spacing: "md",
  list: false,
  wrap: false,
});

const classList = computed(() => {
  return twMerge(
    cva("flex", {
      variants: {
        spacing: {
          none: "",
          xs: "gap-1",
          sm: "gap-2",
          md: "gap-4",
          lg: "gap-8",
          xl: "gap-16",
          "2xl": "gap-32",
        },
        direction: {
          col: "flex-col",
          row: "",
        },
        wrap: {
          true: "flex-wrap",
          false: "",
        },
      },
    })({ spacing: props.spacing, direction: props.direction, wrap: props.wrap })
  );
});

const component = props.list ? "ul" : "div";
</script>

<template>
  <component :is="component" :class="[classList]">
    <slot />
  </component>
</template>
