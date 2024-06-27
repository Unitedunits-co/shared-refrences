import { PostModuleErrors } from './modules/post-module-errors';

export class ErrorApp {
  post: PostModuleErrors;
  constructor() {
    this.post = new PostModuleErrors();
  }
}
