import { NotificationInterface } from '../interfaces/notification.interface';
import { PostNotificationPayloadInterface } from '../interfaces/post-notification-payload.interface';
import { CommentNotificationPayloadInterface } from '../interfaces/comment-notification-payload.interface';
import { ReplayNotificationPayloadInterface } from '../interfaces/replay-notification-payload.interface';
import { CommentLikeNotificationPayloadInterface } from '../interfaces/comment-like-notification-payload.interface';

export class PostEndpoint {
  POST_id_like: NotificationInterface<PostNotificationPayloadInterface>;
  POST_id_comment: [
    NotificationInterface<CommentNotificationPayloadInterface>,
    NotificationInterface<ReplayNotificationPayloadInterface>,
  ];
  POST_id_comment_id_like: NotificationInterface<CommentLikeNotificationPayloadInterface>;

  constructor() {
    this.POST_id_like = {
      namespace: 'ws',
      event: 'notification',
      messageKey: 'new_like_post_user',
      cause: 'someone liked a post from this user',
    };
    this.POST_id_comment = [
      {
        namespace: 'ws',
        event: 'notification',
        messageKey: 'new_comment_user',
        cause: 'someone commented to a post from this user',
      },
      {
        namespace: 'ws',
        event: 'notification',
        messageKey: 'new_reply_user',
        cause: 'someone replied to a comment from this user',
      },
    ];
    this.POST_id_comment_id_like = {
      namespace: 'ws',
      event: 'notification',
      messageKey: 'new_like_comment_user',
      cause: 'someone liked a comment or reply from this user',
    };
  }
}
