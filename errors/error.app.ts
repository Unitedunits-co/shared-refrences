import { PostEndpoint } from './endpoints/post-endpoint';

export class ErrorApp {
  post: PostEndpoint;
  constructor() {
    this.post = new PostEndpoint();
  }
}
