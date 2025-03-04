<script setup lang="ts">
import type { BadgeProps } from "~/types/at/badge";

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  dismissable: false,
  clickable: false,
});

const classList = computed(() => {
  return twMerge(
    cva(
      "px-4 py-0 text-nowrap rounded-full  border-2 transition-all duration-100",
      {
        variants: {
          variant: {
            primary: "bg-primary text-white   border-primary shadow-md",
            outline: "bg-white text-primary  border-primary  shadow-md ",
            skeleton:
              "bg-gray-200 border-gray-200 text-gray-200 w-24 animate-skeleton !py-3",
          },
          dismissable: {
            true: "flex items-center justify-between gap-2 pe-0",
            false: "",
          },
          clickable: {
            true: "cursor-pointer",
            false: "",
          },
        },
        compoundVariants: [
          {
            variant: "primary",
            clickable: true,
            class: "hover:bg-primary-400 hover:border-primary-400",
          },
          {
            variant: "outline",
            clickable: true,
            class:
              "hover:border-primary-400 hover:text-white hover:bg-primary-400",
          },
        ],
      }
    )({
      variant: props.variant,
      dismissable: props.dismissable,
      clickable: props.clickable,
    })
  );
});

const displayText = computed(() => {
  return props.variant === "skeleton" ? "" : props.text;
});
</script>

<template>
  <div :class="[classList]" class="cursor-auto">
    {{ displayText
    }}<UIAtIcon v-if="dismissable" path="cross" class="cursor-pointer" />
  </div>
</template>
