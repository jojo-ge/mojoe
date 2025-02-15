<script setup lang="ts">
import type { ChipProps } from "~/types/at/chip";

const props = withDefaults(defineProps<ChipProps>(), {
  variant: "primary",
  dismissable: false,
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
      },
    })({
      variant: props.variant,
      dismissable: props.dismissable,
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
