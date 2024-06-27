import { PostModuleNotification } from './notifications/post-module-notification';

export class NotificationApp {
  post: PostModuleNotification;
  constructor() {
    this.post = new PostModuleNotification();
  }
}
