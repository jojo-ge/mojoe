<script setup lang="ts">
const navigationItems = [
  {
    to: {
      name: "index",
    },
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
</script>

<template>
  <KitWrapper>
    <UIMoNavigationBadges
      :navigationItems="navigationItems"
      activeLinkLabel="Home"
    />
  </KitWrapper>
</template>
