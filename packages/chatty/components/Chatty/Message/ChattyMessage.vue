<script setup lang="ts">
import type { MessageProps } from "~chatty/types/message";

const props = defineProps<MessageProps>();

const classList = computed(() => {
  return twMerge(
    cva("w-fit", {
      variants: {
        fromMe: {
          true: "!bg-primary-300",
          false: "",
        },
        previousMessageFromSameSender: {
          true: "mt-1",
          false: "mt-4",
        },
      },
    })({
      fromMe: props.fromMe,
      previousMessageFromSameSender: props.previousMessageFromSameSender,
    })
  );
});
</script>

<template>
  <UIAtCard padding="sm" elevation="xs" :class="[classList]">
    <div class="flex gap-4">
      <UIAtAvatar
        v-if="!fromMe"
        :fallbackString="message.sender.name"
        size="xs"
        class="shrink-0"
      />
      <p>{{ message.contents }}</p>
    </div>
  </UIAtCard>
</template>
