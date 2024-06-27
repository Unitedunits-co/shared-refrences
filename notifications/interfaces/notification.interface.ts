export interface NotificationInterface<T> {
  namespace: string;
  event: string;
  messageKey: string;
  cause: string;
  payload?: T;
}
