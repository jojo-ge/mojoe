<script setup lang="ts">
import type { InputTextProps } from "~/types/at/input/text";

const props = withDefaults(defineProps<InputTextProps>(), {
  hideLabel: false,
  trailingButtonIconPath: null,
  trailingButtonFunction: null,
});
const model = defineModel<string>({ required: true });

const classList = computed(() => {
  return twMerge(
    cva("border border-primary py-2 px-4 rounded-lg", {
      variants: {
        hasTrailingButton: {
          true: "pe-10",
          false: "",
        },
      },
    })({
      hasTrailingButton: props.trailingButtonIconPath != "",
    })
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
      <input
        :id="id"
        :name="name"
        type="text"
        v-model="model"
        :class="[classList]"
        :placeholder="placeholder"
      />
      <UIAtButton
        v-if="trailingButtonIconPath && trailingButtonFunction"
        class="absolute right-2 my-auto inset-y-0"
        :iconPath="trailingButtonIconPath"
        variant="link"
        @click="trailingButtonFunction"
      />
    </div>
  </div>
</template>
