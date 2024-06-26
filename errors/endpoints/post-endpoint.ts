import { ErrorInterface } from '../interfaces/error.interface';

export class PostEndpoint {
  POST: ErrorInterface[];
  GET_mine: ErrorInterface[];
  GET_bookmarked: ErrorInterface[];
  GET_id: ErrorInterface[];
  PATCH_id: ErrorInterface[];
  DELETE_id: ErrorInterface[];
  GET_id_comment: ErrorInterface[];
  GET_id_comment_id_replies: ErrorInterface[];
  POST_id_like: ErrorInterface[];
  POST_id_unlike: ErrorInterface[];
  POST_id_comment: ErrorInterface[];
  DELETE_id_comment_id: ErrorInterface[];
  POST_id_comment_id_like: ErrorInterface[];
  POST_id_comment_id_unlike: ErrorInterface[];
  POST_id_bookmark: ErrorInterface[];
  DELETE_id_bookmark: ErrorInterface[];

  constructor() {
    this.POST = [];
    this.GET_mine = [];
    this.GET_bookmarked = [];
    this.GET_id = [
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.PATCH_id = [
      {
        keyMessage: 'cannotEditOthersPost',
        statusCode: 422,
        cause: 'your user id dose not match that of post owner',
      },
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.DELETE_id = [
      {
        keyMessage: 'cannotDeleteOthersPost',
        statusCode: 422,
        cause: 'your user id dose not match that of post owner',
      },
      {
        keyMessage: 'cannotDeleteOthersComment',
        statusCode: 422,
        cause: 'your user id dose not match that of post owner',
      },
    ];
    this.GET_id_comment = [];
    this.GET_id_comment_id_replies = [];
    this.POST_id_like = [
      {
        keyMessage: 'currentlyLiked',
        statusCode: 422,
        cause: 'this post is recorded as liked by user in past and has not changed yet',
      },
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.POST_id_unlike = [
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.POST_id_comment = [
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.DELETE_id_comment_id = [
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
      {
        keyMessage: 'cannotDeleteOthersComment',
        statusCode: 422,
        cause: 'in order to delete a comment you have to be post owner pr comment owner',
      },
    ];
    this.POST_id_comment_id_like = [
      {
        keyMessage: 'currentlyLiked',
        statusCode: 422,
        cause: 'this comment is recorded as liked by user in past and has not changed yet',
      },
      {
        keyMessage: 'postcommentNotFound',
        statusCode: 404,
        cause: 'this comment id is not found in database',
      },
    ];
    this.POST_id_comment_id_unlike = [
      {
        keyMessage: 'postcommentNotFound',
        statusCode: 404,
        cause: 'this comment id is not found in database',
      },
    ];
    this.POST_id_bookmark = [
      {
        keyMessage: 'postNotFound',
        statusCode: 404,
        cause: 'this post id is not found in database',
      },
    ];
    this.DELETE_id_bookmark = [
      {
        keyMessage: 'bookmarkNotFound',
        statusCode: 404,
        cause: 'this post id is not bookmarked in database',
      },
    ];
  }
}
