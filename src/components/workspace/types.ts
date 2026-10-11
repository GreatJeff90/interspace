export interface Persona {
  id: string;
  name: string;
  handle: string;
  badge: string;
  color: string;
  unreadCount?: number;
}

export interface Thread {
  id: string;
  personaId: string;
  name: string;
  type: "channel" | "direct" | "ai";
  avatarText: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online?: boolean;
}

export interface Message {
  id: string;
  sender: "me" | "peer";
  senderName: string;
  text: string;
  time: string;
  isCode?: boolean;
  codeLanguage?: string;
}