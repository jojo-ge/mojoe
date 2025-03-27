<template>
  <div>
    <KitWrapper>
      <UIAtBadge text="Badge" />
      <UIAtBadge variant="outline" text="Badge" />
    </KitWrapper>
    <KitWrapper>
      <UIAtBadge :dismissable="true" text="Badge" />
      <UIAtBadge :dismissable="true" variant="outline" text="Badge" />
    </KitWrapper>
  </div>
</template>
