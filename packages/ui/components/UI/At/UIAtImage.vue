<script setup lang="ts">
import type { ImageProps } from "~/types/at/image";

defineProps<ImageProps>();
</script>

<template>
  <div class="w-full h-auto">
    <NuxtImg :src="src" />
  </div>
</template>
