<script lang="ts" setup>
const image =
  "https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_FMjpg_UX1000_.jpg";
</script>

<template>
  <KitWrapper>
    <UIAtAvatar :src="image" fallbackString="Jason Statham" size="sm" />
    <UIAtAvatar fallbackString="Jason Statham" size="sm" />
  </KitWrapper>
  <KitWrapper>
    <UIAtAvatar :src="image" fallbackString="Jason Statham" size="md" />
    <UIAtAvatar fallbackString="Jason Statham" size="md" />
  </KitWrapper>
  <KitWrapper>
    <UIAtAvatar :src="image" fallbackString="Jason Statham" size="lg" />
    <UIAtAvatar fallbackString="Jason Statham" size="lg" />
  </KitWrapper>
  <KitWrapper>
    <UIAtAvatar :src="image" fallbackString="Jason Statham" size="xl" />
    <UIAtAvatar fallbackString="Jason Statham" size="xl" />
  </KitWrapper>
</template>
