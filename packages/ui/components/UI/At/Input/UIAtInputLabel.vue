<script setup lang="ts">
import type { InputLabelProps } from "~/types/at/input/label";

const props = withDefaults(defineProps<InputLabelProps>(), {
  hideLabel: false,
});

const classList = computed(() => {
  return twMerge(
    cva("", {
      variants: {
        hideLabel: {
          true: "sr-only",
          false: "",
        },
      },
    })({
      hideLabel: props.hideLabel,
    })
  );
});
</script>

<template>
  <label :class="[classList]" :for="forId">{{ text }}</label>
</template>
