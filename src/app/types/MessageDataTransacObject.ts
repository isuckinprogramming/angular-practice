
export class MessagesData {

  constructor(
    sender: string,
    content: string,

    recipient: string,
    sentTime: string,

    channelId: string
  ) {
    this.content = content
    this.sender = sender;

    this.recipient = recipient;
    this.sentTime = sentTime;

    this.channelId = channelId;
  }

  channelId: string;

  recipient: string;
  sender: string;

  sentTime: string;
  content: string;
}
