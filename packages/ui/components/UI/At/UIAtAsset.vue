<script setup lang="ts">
import type { AssetProps } from "~/types/at/asset";

const props = defineProps<AssetProps>();

const assetHtml = ref<string>("");

async function getAssetHtml(path: string) {
  try {
    const assetsImport = <Record<string, () => Promise<string>>>(
      import.meta.glob(["~/assets/**/**", "~ui/assets/**/**"], {
        query: "?raw",
        import: "default",
      })
    );
    const transformedFiles = Object.fromEntries(
      Object.entries(assetsImport).map(([key, value]) => {
        const newKey = key.replace(/^.*?\/assets\//, "assets/");
        return [newKey, value];
      })
    );

    const importFn = transformedFiles[`assets/${path}`];

    if (importFn) {
      assetHtml.value = await importFn();
    }
  } catch {
    console.error(`Asset '${props.path}' doesn't exist in 'assets'`);
  }
}

watch(
  () => props.path,
  (newPath) => {
    void getAssetHtml(newPath);
  },
  { immediate: true }
);
</script>

<template>
  <span class="inline-block" v-html="assetHtml" />
</template>
