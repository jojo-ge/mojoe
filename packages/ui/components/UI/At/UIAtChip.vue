<script setup lang="ts">
import type { ChipProps } from "~/types/at/chip";

const props = withDefaults(defineProps<ChipProps>(), {
  total: null,
  color: "red",
});

const classList = computed(() => {
  return twMerge(
    cva(
      "absolute -top-1 -right-1 h-4 w-4  rounded-full text-white flex items-center justify-center",
      {
        variants: {
          color: {
            red: "bg-red-500",
            green: "bg-green-500",
            primary: "bg-primary",
            secondary: "bg-secondary",
          },
        },
      }
    )({
      color: props.color,
    })
  );
});
</script>

<template>
  <div class="relative">
    <div :class="[classList]" v-if="active">
      <span v-if="total !== null && total > 0">{{ total }}</span>
    </div>
    <slot />
  </div>
</template>
