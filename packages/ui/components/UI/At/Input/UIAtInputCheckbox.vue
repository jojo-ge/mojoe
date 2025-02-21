<script setup lang="ts">
import type { InputCheckboxProps } from "~/types/at/input/checkbox";

const props = withDefaults(defineProps<InputCheckboxProps>(), {
  labelPosition: "right",
});

const emit = defineEmits<{
  "update:modelValue": [];
}>();
const classList = computed(() => {
  return twMerge(
    cva(
      "h-5 w-5  rounded-sm border-1 cursor-pointer border-primary bg-white text-white flex items-center justify-center",
      {
        variants: {
          value: {
            true: "bg-primary",
            false: "",
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

const updateValue = () => {
  emit("update:modelValue");
};
const id = useId();
</script>

<template>
  <div :class="[containerClassList]">
    <UIAtInputLabel :forId="id" :text="label" :hideLabel="hideLabel" />
    <button role="checkbox" :class="[classList]" @click="updateValue" :id="id">
      <UIAtIcon v-if="value" size="sm" path="check" />
    </button>
  </div>
</template>
