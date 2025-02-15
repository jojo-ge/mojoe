<template>
  <div>
    <KitWrapper>
      <UIAtChip text="chippy" />
      <UIAtChip variant="outline" text="Chippy" />
    </KitWrapper>
    <KitWrapper>
      <UIAtChip :dismissable="true" text="chippy" />
      <UIAtChip :dismissable="true" variant="outline" text="Chippy" />
    </KitWrapper>
  </div>
</template>
