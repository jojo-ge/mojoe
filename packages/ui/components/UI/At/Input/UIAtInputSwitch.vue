<script setup lang="ts">
import type { InputSwitchProps } from "~/types/at/input/switch";

const props = withDefaults(defineProps<InputSwitchProps>(), {
  labelPosition: "right",
});

const emit = defineEmits<{
  "update:modelValue": [];
}>();
const classList = computed(() => {
  return twMerge(
    cva(
      "h-8 w-16 relative rounded-full transition duration-200 border-2 cursor-pointer border-primary text-white flex items-center justify-center",
      {
        variants: {
          value: {
            true: "bg-primary",
            false: "bg-grey-200",
          },
          labelPosition: {
            top: "flex flex-col",
            right: "",
            left: "",
            bottom: "",
          },
        },
      }
    )({
      value: props.value,
      labelPosition: props.labelPosition,
    })
  );
});
const containerClassList = computed(() => {
  return twMerge(
    cva("flex gap-1 items-center", {
      variants: {
        labelPosition: {
          top: "flex-col",
          right: "flex-row-reverse",
          left: "flex-row",
          bottom: "flex-col-reverse",
        },
      },
    })({
      labelPosition: props.labelPosition,
    })
  );
});
const indicatorClassList = computed(() => {
  return twMerge(
    cva("absolute inset-y-0 my-auto transition duration-200", {
      variants: {
        active: {
          true: "right-0",
          false: "left-0 text-primary-400",
        },
      },
    })({
      active: props.value,
    })
  );
});

const updateValue = () => {
  emit("update:modelValue");
};
const id = useId();
</script>

<template>
  <div :class="[containerClassList]">
    <UIAtInputLabel :forId="id" :text="label" :hideLabel="hideLabel" />
    <button rold="checkbox" :class="[classList]" @click="updateValue" :id="id">
      <UIAtIcon path="circle-filled" :class="[indicatorClassList]" />
    </button>
  </div>
</template>
