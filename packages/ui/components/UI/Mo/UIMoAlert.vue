<script setup lang="ts">
import type { AlertProps } from "~/types/mo/alert";

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "info",
  text: null,
  iconPath: null,
});

const classList = computed(() => {
  return twMerge(
    cva("flex gap-2  min-w-72 !px-8", {
      variants: {
        variant: {
          success: "!bg-green-600 text-white",
          info: "!bg-primary-500 text-white",
          danger: "!bg-red-800 text-white",
        },
        titleOnly: {
          true: "justify-center items-center",
          false: "justify-start items-start",
        },
      },
    })({
      variant: props.variant,
      titleOnly: props.text === null,
    })
  );
});
</script>

<template>
  <UIAtCard padding="sm" :class="[classList]">
    <UIAtIcon v-if="iconPath" :path="iconPath" size="md" />
    <div>
      <UIAtHeading size="h4" styleSize="h5" :text="title" />
      <p>{{ text }}</p>
    </div>
  </UIAtCard>
</template>
