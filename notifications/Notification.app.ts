import { PostModuleNotification } from './notifications/post-module-notification';
import { ChatModuleNotification } from './notifications/chat-module-notification';

export class NotificationApp {
  post: PostModuleNotification;
  chat: ChatModuleNotification;
  constructor() {
    this.post = new PostModuleNotification();
    this.chat = new ChatModuleNotification();
  }
}
