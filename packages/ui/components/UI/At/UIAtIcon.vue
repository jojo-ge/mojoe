<script setup lang="ts">
import type { IconProps } from "~/types/at/icon";

const props = withDefaults(defineProps<IconProps>(), {
  size: "md",
});

const classList = computed(() => {
  return twMerge(
    cva("", {
      variants: {
        size: {
          sm: "h-4 w-4",
          md: "h-6 w-6",
          lg: "h-8 w-8",
        },
      },
    })({
      size: props.size,
    })
  );
});

const iconPath = `icons/${props.path}.svg`;
</script>

<template>
  <UIAtAsset :class="[classList]" :path="iconPath" />
</template>
