<script setup lang="ts">
import type { NavigationChipsProps } from "~/types/mo/navigation/chips";

defineProps<NavigationChipsProps>();
const id = useId();
</script>

<template>
  <UIAtLayoutFlex spacing="md">
    <UIAtLink
      v-for="(item, index) in navigationItems"
      :key="`${id}-${index}`"
      :to="item.to"
    >
      <UIAtBadge
        :text="item.label"
        :clickable="true"
        :variant="activeLinkLabel === item.label ? 'primary' : 'outline'"
      />
    </UIAtLink>
  </UIAtLayoutFlex>
</template>
