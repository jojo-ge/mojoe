import type { ChattyMessage } from "./chatty";

export type MessageProps = {
  message: ChattyMessage;
  fromMe: boolean;
  previousMessageFromSameSender: boolean;
};
