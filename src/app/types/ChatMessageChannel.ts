import { ChatUser } from "./ChatUser";
import { MessagesData } from "./MessageDataTransacObject";

export interface ChatMessageChannel {

  uniqueId: number;
  messages: Map<number, MessagesData>;
  members: ChatUser[];
  
}
