type ErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ResponseError = {
  status: ErrorType,
  data: { message: string }
};

export type ResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServerResponse<T> = ResponseError | ResponseSuccess<T>;