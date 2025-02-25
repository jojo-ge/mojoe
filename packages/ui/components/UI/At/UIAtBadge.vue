<script setup lang="ts">
import type { BadgeProps } from "~/types/at/badge";

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  dismissable: false,
  clickable: false,
});

const classList = computed(() => {
  return twMerge(
    cva("px-4 py-0", {
      variants: {
        variant: {
          primary:
            "bg-primary text-white rounded-full border-2 border-primary shadow-md",
          outline:
            "bg-white text-primary rounded-full border-2 border-primary  shadow-md ",
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
    })({
      variant: props.variant,
      dismissable: props.dismissable,
      clickable: props.clickable,
    })
  );
});
</script>

<template>
  <div :class="[classList]" class="cursor-auto">
    {{ text
    }}<UIAtIcon v-if="dismissable" path="cross" class="cursor-pointer" />
  </div>
</template>
