<script setup lang="ts">
import type { InputTextAreaProps } from "~/types/at/input/textarea";

withDefaults(defineProps<InputTextAreaProps>(), {
  hideLabel: false,
});
const model = defineModel<string>({ required: true });

const classList = computed(() => {
  return twMerge(
    cva("border border-primary py-2 px-4 rounded-lg", {
      variants: {},
    })({})
  );
});

const id = useId();
</script>

<template>
  <div>
    <UIAtInputLabel
      :text="label"
      class="block"
      :forId="id"
      :hideLabel="hideLabel"
    />
    <div class="relative">
      <textarea
        :id="id"
        :name="name"
        v-model="model"
        :class="[classList]"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
