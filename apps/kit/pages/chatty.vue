<script setup lang="ts">
import type { ChattyMessage } from "~chatty/types/chatty";
import type ChattyContainer from "~chatty/components/Chatty/ChattyContainer.vue";

const messages = ref<ChattyMessage[]>([]);

const myId = "1";
const isPreviousMessageFromSameSender = (index: number) => {
  if (index === 0) {
    return true;
  }
  if (messages.value[index - 1].sender.id === messages.value[index].sender.id) {
    return true;
  }
  return false;
};

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const showGrid = ref(false);
const streamedMessage =
  "sequi deleniti unde provident, autem odio dolorum esse quia dignissimos aliquid dicta. Ab beatae molestias tempore numquam eum. Eligendi laudantium delectus nobis tempora! Similique fugiat <imabreak>hic quos praesentium maxime totam ipsum, dolore unde asperiores cupiditate tempore quas sit <imabreak>magnam atque quae nulla autem incidunt blanditiis suscipit provident facere quia repellendus. Inventore illum sint sunt, repellendus repellat ipsam?";

type ChattyContainerType = InstanceType<typeof ChattyContainer>;
const chattyContainer = useTemplateRef<ChattyContainerType>("chattyContainer");
const currentMessage = ref("");
const streamMessage = async () => {
  for (let i = 0; i < streamedMessage.length; i++) {
    console.log(i);
    currentMessage.value = `${currentMessage.value}${streamedMessage[i]}`;
    await sleep(5);
    if (currentMessage.value.slice(-10) === "<imabreak>") {
      console.log("THIS THING");
      messages.value.push({
        id: (messages.value.length + 1).toString(),
        createdAt: "",
        sender: {
          id: "2",
          role: "ai",
          name: "Halle",
          avatarUrl: null,
        },
        contents: currentMessage.value.slice(0, -10),
      });
      chattyContainer.value?.scrollContainerBottom();
      currentMessage.value = "";
    }
  }
  messages.value.push({
    id: (messages.value.length + 1).toString(),
    createdAt: "",
    sender: {
      id: "2",
      role: "ai",
      name: "Halle",
      avatarUrl: null,
    },
    contents: currentMessage.value.slice(0, -10),
  });
  chattyContainer.value?.scrollContainerBottom();
  currentMessage.value = "";

  await sleep(100);
};

const loadingResponse = ref(false);

const diableLoading = async () => {
  await nextTick();
  loadingResponse.value = !loadingResponse.value;
};

const systemResponses = [
  "What do you think about this? if you're unsure choose the recommended option that makes the most sense",
  "What do you think about this response? Click a thumbs up or thumbs down",
  "Try clicking on one of the jobs on the right hand of your screen",
];

const counter = ref(0);
const updateMessages = (message: string, responseType?: string) => {
  messages.value.push({
    id: (messages.value.length + 1).toString(),
    createdAt: "",
    sender: {
      id: "1",
      role: "user",
      name: "Joseph",
      avatarUrl: null,
    },
    contents: message,
  });
  diableLoading();
  streamMessage()
    .then(() => {
      if (responseType === "recommendedResponse") {
        messages.value.push({
          id: (messages.value.length + 1).toString(),
          createdAt: "",
          sender: {
            id: "2",
            role: "system",
            name: "System",
            avatarUrl: null,
          },
          contents: systemResponses[counter.value],
        });

        if (
          systemResponses[counter.value] ===
          "Try clicking on one of the jobs on the right hand of your screen"
        ) {
          showGrid.value = true;
        } else {
          showGrid.value = false;
        }
        counter.value += 1;
        if (counter.value === 3) {
          counter.value = 0;
        }
      }
    })
    .then(() => diableLoading());
};
</script>

<template>
  <div class="px-1">
    <ChattyContainer
      ref="chattyContainer"
      @messageSent="updateMessages"
      :disableInput="loadingResponse"
    >
      <ChattyMessageTransitionGroup>
        <div v-for="(message, index) in messages" :key="`message-${index}`">
          <ChattyMessage
            class="max-w-5/6"
            :class="{ 'ms-auto': myId === message.sender.id }"
            :message="message"
            :previousMessageFromSameSender="
              isPreviousMessageFromSameSender(index)
            "
            :fromMe="myId === message.sender.id"
            :id="message.id"
          />
        </div>
      </ChattyMessageTransitionGroup>
    </ChattyContainer>
  </div>
</template>
