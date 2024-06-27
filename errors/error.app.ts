import { PostModuleErrors } from './modules/post-module-errors';
import { ChatModuleError } from './modules/chat-module-errors';

export class ErrorApp {
  post: PostModuleErrors;
  chat: ChatModuleError;
  constructor() {
    this.post = new PostModuleErrors();
    this.chat = new ChatModuleError();
  }
}
