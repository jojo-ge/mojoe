<template>
  <div>
    <KitWrapper>
      <UIAtBadge text="chippy" />
      <UIAtBadge variant="outline" text="Chippy" />
    </KitWrapper>
    <KitWrapper>
      <UIAtBadge :dismissable="true" text="chippy" />
      <UIAtBadge :dismissable="true" variant="outline" text="Chippy" />
    </KitWrapper>
  </div>
</template>
