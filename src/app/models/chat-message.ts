// chat.model.ts
export enum ChatRole {
  USER = 0,
  ASSISTANT = 1
}

export interface IChatMessage {
  id: string;           // UUID as string
  chatId: string;       // UUID as string
  userId: string;       // UUID as string
  userName: string;
  content: string;
  prompt: string;
  role: ChatRole;
  timestamp: string;    // ISO-8601 format
}