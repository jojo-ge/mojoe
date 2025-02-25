<script setup lang="ts"></script>

<template>
  <KitWrapper>
    <UIAtChip :active="true">
      <UIAtBadge text="just the dot" />
    </UIAtChip>
    <UIAtChip :total="4" :active="true">
      <UIAtBadge text="with a number" />
    </UIAtChip>
    <UIAtChip :total="4" :active="true" color="green">
      <UIAtBadge text="green" />
    </UIAtChip>
    <UIAtChip :total="4" :active="true" color="primary">
      <UIAtBadge text="primary" variant="outline" />
    </UIAtChip>
    <UIAtChip :total="4" :active="true" color="secondary">
      <UIAtBadge text="secondary" />
    </UIAtChip>
  </KitWrapper>
</template>
