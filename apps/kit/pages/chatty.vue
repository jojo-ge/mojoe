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

const streamedMessage =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis dicta quidem commodi. Voluptate dolores non harum ipsa nemo velit, similique accusantium sint natus. A quae repellat exercitationem! Optio possimus magnam maxime cupiditate eius accusantium ab quas at tempore obcaecati placeat voluptate repellendus sequi deleniti unde provident, autem odio dolorum esse quia dignissimos aliquid dicta. Ab beatae molestias tempore numquam eum. Eligendi laudantium delectus nobis tempora! Similique fugiat <imabreak>hic quos praesentium maxime totam ipsum, dolore unde asperiores cupiditate tempore quas sit <imabreak>magnam atque quae nulla autem incidunt blanditiis suscipit provident facere quia repellendus. Inventore illum sint sunt, repellendus repellat ipsam?";

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

const updateMessages = (message: string) => {
  messages.value.push({
    id: (messages.value.length + 1).toString(),
    createdAt: "",
    sender: {
      id: "1",
      name: "Joseph",
      avatarUrl: null,
    },
    contents: message,
  });
  diableLoading();
  streamMessage().then(() => diableLoading());
};
</script>

<template>
  <div class="flex p-4">
    <UIAtCard class="max-w-screen-sm w-full">
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
    </UIAtCard>
  </div>
</template>
