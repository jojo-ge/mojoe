<template>
  <div>
    <KitWrapper>
      <UIAtButton
        :loading="true"
        iconPath="arrow-down-circle"
        text="Click sm!"
        size="sm"
      />
      <UIAtButton iconPath="arrow-down-circle" text="Click sm!" size="sm" />
      <UIAtButton text="Click sm!" size="sm" variant="outline" />
      <UIAtButton text="Click sm!" size="sm" variant="link" />
      <UIAtButton loading text="Click sm!" size="sm" variant="link" />
    </KitWrapper>
    <KitWrapper>
      <UIAtButton text="Click md!" :loading="true" />
      <UIAtButton
        iconPath="arrow-down-circle"
        text="Click md!"
        variant="outline"
      />
      <UIAtButton
        text="Click md!"
        iconPath="arrow-down-circle"
        variant="link"
      />
    </KitWrapper>
    <KitWrapper>
      <UIAtButton iconPath="arrow-down-circle" size="sm" />
      <UIAtButton iconPath="arrow-down-circle" />
      <UIAtButton iconPath="arrow-down-circle" size="lg" />
    </KitWrapper>
    <KitWrapper>
      <UIAtButton iconPath="arrow-down-circle" variant="outline" size="sm" />
      <UIAtButton iconPath="arrow-down-circle" variant="outline" />
      <UIAtButton iconPath="arrow-down-circle" variant="outline" size="lg" />
    </KitWrapper>
    <KitWrapper>
      <UIAtButton iconPath="arrow-down-circle" variant="link" size="sm" />
      <UIAtButton iconPath="arrow-down-circle" variant="link" />
      <UIAtButton iconPath="arrow-down-circle" variant="link" size="lg" />
    </KitWrapper>
    <KitWrapper>
      <UIAtButton
        iconPath="arrow-down-circle"
        text="Click lg!"
        :disabled="true"
        size="lg"
      />
      <UIAtButton
        text="Click lg!"
        :loading="true"
        size="lg"
        variant="outline"
      />
      <UIAtButton text="Click lg!" size="lg" variant="outline" />
      <UIAtButton text="Click lg!" :disabled="true" size="lg" variant="link" />
    </KitWrapper>
  </div>
</template>
