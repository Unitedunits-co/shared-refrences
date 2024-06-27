export interface CommentLikeNotificationPayloadInterface {
  message: string;
  actingUserId: string;
  ownerUserId: string;
  postId: string;
  commentId: string;
}
