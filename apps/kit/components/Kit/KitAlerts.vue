<script setup lang="ts"></script>

<template>
  <KitWrapper class="flex-col">
    <div class="flex gap-6">
      <UIMoAlert title="Alert" iconPath="arrow-down-circle" />
      <UIMoAlert
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
      <UIMoAlert
        iconPath="arrow-down-circle"
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
    </div>
    <div class="flex gap-6">
      <UIMoAlert variant="success" title="Alert" />
      <UIMoAlert
        variant="success"
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
      <UIMoAlert
        variant="success"
        iconPath="arrow-down-circle"
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
    </div>
    <div class="flex gap-6">
      <UIMoAlert variant="danger" title="Alert" iconPath="arrow-down-circle" />
      <UIMoAlert
        variant="danger"
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
      <UIMoAlert
        variant="danger"
        iconPath="arrow-down-circle"
        title="Alert"
        text="this is an alert so you should probably read it!"
      />
    </div>
  </KitWrapper>
</template>
