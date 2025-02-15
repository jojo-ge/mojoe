<script setup lang="ts">
import { offset, useFloating } from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits<{
  clickOutside: [];
}>();
const reference = ref(null);
const floating = ref(null);
const middleware = [
  offset({
    crossAxis: -1,
  }),
];
const { floatingStyles } = useFloating(reference, floating, { middleware });

onClickOutside(reference, () => {
  emit("clickOutside");
});
</script>

<template>
  <div>
    <div ref="reference">
      <slot name="reference" />
    </div>
    <div ref="floating">
      <div :style="floatingStyles">
        <slot name="floating" />
      </div>
    </div>
  </div>
</template>
