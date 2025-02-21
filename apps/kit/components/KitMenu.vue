<script setup lang="ts">
const menuItems = [
  {
    value: "home",
    label: "Home",
  },
  {
    value: "about",
    label: "About",
  },
  {
    value: "contact",
    label: "Contact",
  },
];

const selected = ref("home");
</script>

<template>
  <KitWrapper>
    <UIMoMenu :menuItems="menuItems" v-model="selected" />
    <UIMoTabList :tabListItems="menuItems" v-model="selected" />
  </KitWrapper>
</template>
