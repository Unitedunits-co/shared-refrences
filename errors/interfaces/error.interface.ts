export interface ErrorInterface {
  keyMessage: string;
  statusCode: number;
  cause: string;
  note?: string;
}
