export type ChattyMessageSender = {
  id: string;
  name: string;
  avatarUrl: string | null;
};

export type ChattyMessage = {
  id: string;
  sender: ChattyMessageSender;
  createdAt: string;
  contents: string;
};
