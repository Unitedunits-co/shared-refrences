import { ErrorInterface } from '../interfaces/error.interface';

export class ChatModuleError {
  POST_message: ErrorInterface[];
  POST_conversation_message: ErrorInterface[];
  POST_admins_conversation: ErrorInterface[];
  GET_conversation: ErrorInterface[];
  GET_conversation_id_message: ErrorInterface[];

  constructor() {
    this.POST_message = [];
    this.POST_conversation_message = [
      {
        keyMessage: 'conversationNotFound',
        statusCode: 404,
        cause: 'this conversation id is not found in database',
      },
    ];
    this.POST_admins_conversation = [];
    this.GET_conversation = [];
    this.GET_conversation_id_message = [
      {
        keyMessage: 'conversationNotFound',
        statusCode: 404,
        cause: 'this conversation id is not found in database',
      },
    ];
  }
}
