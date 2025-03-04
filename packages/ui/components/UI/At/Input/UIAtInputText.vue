<script setup lang="ts">
import type { InputTextProps } from "~/types/at/input/text";

const props = withDefaults(defineProps<InputTextProps>(), {
  hideLabel: false,
  trailingButtonIconPath: null,
  trailingButtonFunction: null,
  loading: false,
  disabled: false,
});
const model = defineModel<string>({ required: true });

const emit = defineEmits<{
  "keydown.enter": [];
}>();

const classList = computed(() => {
  return twMerge(
    cva("border border-primary bg-white py-2 px-4 rounded-lg w-full", {
      variants: {
        hasTrailingButton: {
          true: "pe-10",
          false: "",
        },
        disabled: {
          true: "!bg-gray-100 border-gray-600",
          false: "",
        },
      },
    })({
      hasTrailingButton: props.trailingButtonIconPath != "",
      disabled: props.disabled,
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
        :disabled="disabled"
        :name="name"
        type="text"
        v-model="model"
        :class="[classList]"
        :placeholder="placeholder"
        @keydown.enter="emit('keydown.enter')"
      />
      <div class="absolute right-2 inset-y-0 h-full flex items-center">
        <UIAtButton
          v-if="trailingButtonIconPath && trailingButtonFunction && !loading"
          :iconPath="trailingButtonIconPath"
          variant="link"
          @click="trailingButtonFunction"
        />
        <UIAtLoader size="md" v-if="loading" />
      </div>
    </div>
  </div>
</template>
