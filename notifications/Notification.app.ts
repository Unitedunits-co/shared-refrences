import { PostEndpoint } from './endpoints/post-endpoint';

export class NotificationApp {
  post: PostEndpoint;
  constructor() {
    this.post = new PostEndpoint();
  }
}
