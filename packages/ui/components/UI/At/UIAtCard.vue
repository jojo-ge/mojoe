<script setup lang="ts">
const classList = computed(() => {
  return twMerge(
    cva("bg-white shadow-lg drop-shadow-lg p-8 rounded-xl", {
      variants: {},
    })({})
  );
});
</script>

<template>
  <div :class="[classList]">
    <slot />
  </div>
</template>
