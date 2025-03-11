<script setup lang="ts">
import { useTemplateRef } from "vue";

type Props = {
  disableInput: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  messageSent: [message: string, responseType?: string];
}>();
const newMessageInput = ref("");
const send = () => {
  emit("messageSent", newMessageInput.value);
  scrollContainerBottom();
  newMessageInput.value = "";
};
const chatContainer = useTemplateRef<HTMLDivElement>("chatContainer");

const scrollContainerBottom = async (containerMode: boolean = false) => {
  if (containerMode) {
    chatContainer.value?.scrollTo(0, chatContainer.value?.scrollHeight);
    return;
  }
  await nextTick();
  const lastMessage = chatContainer.value?.lastElementChild;
  lastMessage?.scrollIntoView({ block: "end", inline: "end" });
};

onMounted(() => {
  scrollContainerBottom(true);
});

const badgesContainerClassList = computed(() => {
  return twMerge(
    cva("duration-500 transition-all", {
      variants: {
        showBadges: {
          true: "h-0 opacity-0",
          false: "h-full max-h-fit",
        },
      },
    })({
      showBadges: props.disableInput,
    })
  );
});

watch(
  () => props.disableInput,
  (newVal) => {
    if (!newVal) {
      scrollContainerBottom();
    }
  }
);

defineExpose({
  scrollContainerBottom,
});
</script>

<template>
  <div
    class="relative h-screen min-h-fit flex flex-col pb-14 justify-end w-full"
  >
    <div ref="chatContainer">
      <slot />
    </div>
    <div class="absolute bottom-1 inset-x-0">
      <UIAtInputText
        :placeholder="
          disableInput ? 'Loading a response...' : 'Enter a message'
        "
        trailingButtonIconPath="arrow-down-circle"
        :trailingButtonFunction="send"
        :disabled="disableInput"
        :loading="disableInput"
        name="new-message-input"
        v-model="newMessageInput"
        label="Enter a message"
        :hideLabel="true"
        @keydown.enter="send"
      />
      <!--   <UIAtLayoutFlex
        :wrap="true"
        class="mb-4 overflow-hidden bg-white py-2 border-t-2 border-grey-200"
        :class="[badgesContainerClassList]"
      >
        <UIAtBadge
          @click="
            emit('messageSent', 'Show me something cool', 'recommendedResponse')
          "
          text="Show me something cool"
          :clickable="true"
        />
        <UIAtBadge
          @click="emit('messageSent', 'I dont know', 'recommendedResponse')"
          text="I dont know"
          :clickable="true"
        />
        <UIAtBadge
          @click="emit('messageSent', 'Maybe next time', 'recommendedResponse')"
          text="Maybe next time"
          :clickable="true"
        />
        <UIAtBadge
          @click="emit('messageSent', 'One day, maybe', 'recommendedResponse')"
          text="One day, maybe one day"
          :clickable="true"
        />
        <UIAtBadge
          @click="
            emit('messageSent', 'Some other option', 'recommendedResponse')
          "
          text="Some other option"
          :clickable="true"
        />
      </UIAtLayoutFlex> -->
    </div>
  </div>
</template>
