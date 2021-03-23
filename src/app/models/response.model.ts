export interface ResponseModel<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
