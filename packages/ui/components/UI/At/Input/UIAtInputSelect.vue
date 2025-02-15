<script setup lang="ts">
import type { InputSelectProps } from "~/types/at/input/select";

const props = defineProps<InputSelectProps>();

const model = defineModel<string | null>({ required: true });

const optionsOpen = ref(false);

const anchorClassList = computed(() => {
  return twMerge(
    cva("border border-primary py-2 px-4 rounded-lg min-w-48 cursor-pointer", {
      variants: {
        optionsOpen: {
          true: "rounded-b-none border-b-0",
          false: "",
        },
      },
    })({
      optionsOpen: optionsOpen.value,
    })
  );
});
const floatingClassList = computed(() => {
  return twMerge(
    cva("border border-primary min-w-48 rounded-b-lg bg-white", {
      variants: {},
    })({})
  );
});
const optionClassList = computed(() => {
  return twMerge(
    cva(
      "hover:!bg-primary-400 hover:text-white transition duration-100 cursor-pointer py-1 px-4 aria-checked:bg-primary-500 aria-checked:text-white",
      {
        variants: {},
      }
    )({})
  );
});

const toggleOpen = (value?: boolean) => {
  if (value !== undefined) {
    optionsOpen.value = value;
    return;
  }
  optionsOpen.value = !optionsOpen.value;
};

const updateModel = (value: string) => {
  model.value = value;
};

const placeholderValue = computed(() => {
  if (model.value) {
    return props.options.find((e) => e.value === model.value)!.label;
  }
  return props.placeholder;
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
    <UIAtFloating @clickOutside="toggleOpen(false)">
      <template #reference>
        <div
          :class="[anchorClassList]"
          @click="toggleOpen()"
          :id="id"
          role="select"
        >
          <span>{{ placeholderValue }}</span>
        </div>
      </template>
      <template #floating>
        <div>
          <div :class="[floatingClassList]" v-if="optionsOpen">
            <ul>
              <li
                v-for="option in options"
                :key="option.value"
                :class="[optionClassList]"
                :aria-checked="model === option.value"
                @click.prevent="updateModel(option.value)"
              >
                {{ option.label }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </UIAtFloating>
  </div>
</template>
