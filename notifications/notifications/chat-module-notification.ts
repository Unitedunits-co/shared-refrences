import { NotificationInterface } from '../interfaces/notification.interface';

export class ChatModuleNotification {
  POST_message: NotificationInterface<any>;
  POST_conversation_message: NotificationInterface<any>;

  constructor() {
    this.POST_message = {
      namespace: 'ws',
      event: 'chat',
      messageKey: '',
      cause: 'some one or manager send message to you directly',
      //the payload is a conversation object like what we have in api endpoint
    };
    this.POST_conversation_message = {
      namespace: 'ws',
      event: 'chat',
      messageKey: '',
      cause: 'some one or manager send message in conversation you are part of',
      //the payload is a conversation object like what we have in api endpoint
    };
  }
}
