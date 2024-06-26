export interface CommentNotificationPayloadInterface {
  message: string;
  actingUserId: string;
  ownerUserId: string;
  postId: string;
  commentId: string;
}
