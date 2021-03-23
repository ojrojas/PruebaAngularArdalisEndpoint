export interface Result<T> {
    isSuccess: boolean;
    message: string;
    response: T;
}
