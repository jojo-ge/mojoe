<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "~ui/types/at/button";

const props = withDefaults(defineProps<ButtonProps>(), {
  text: "",
  variant: "primary",
  size: "md",
  disabled: false,
  iconPath: null,
  loading: false,
});

const iconOnly: boolean = props.iconPath !== null && props.text === "";

const isDisabled = computed<boolean>(() => {
  return props.loading || props.disabled;
});

const classList = computed(() => {
  return twMerge(
    cva("flex items-center gap-1", {
      variants: {
        variant: {
          primary: `bg-primary text-white rounded-xl border-2 border-primary shadow-md 
          hover:bg-primary-400 hover:border-primary-400 
          aria-disabled:bg-primary-400 aria-disabled:border-primary-400`,
          outline: `bg-white text-primary rounded-xl border-2 border-primary  shadow-md
          hover:border-primary-400 hover:text-white hover:bg-primary-400
          aria-disabled:border-primary-400 aria-disabled:text-primary-400 aria-disabled:bg-grey-200`,
          link: `text-primary font-semibold p-2 rounded-xl border-2 border-transparent
          hover:text-primary-400 aria-disabled:text-primary-400`,
        },
        size: {
          sm: "px-2 py-1 text-sm",
          md: "px-6 py-3",
          lg: "px-10 py-6 text-xl",
        },
        disabled: {
          true: "cursor-not-allowed",
          false: "cursor-pointer transition duration-150 active:scale-101",
        },
        iconOnly: {
          true: "!rounded-full !px-1 !py-1 h-min",
          false: "",
        },
        loading: {
          true: "!py-2",
          false: "",
        },
      },
    })({
      variant: props.variant,
      size: props.size,
      disabled: isDisabled.value,
      iconOnly: iconOnly,
      loading: props.loading,
    })
  );
});

const id = useId();
</script>

<template>
  <button :class="[classList]" :id="id" :aria-disabled="disabled">
    <template v-if="!loading">
      <UIAtIcon
        v-if="iconPath"
        :path="iconPath"
        :size="size"
        class="inline-block"
      />
      {{ text }}
    </template>
    <template v-else>
      <UIAtLoader :size="size" />
    </template>
  </button>
</template>
