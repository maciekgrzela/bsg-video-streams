import axios from 'axios';
import { RequestError } from '../types/requestError';

export const prepareRequestError = (error: any): RequestError => {
  const returnedError: RequestError = {
    message: '',
  };

  if (axios.isAxiosError(error)) {
    if (error.response) {
      returnedError.code = error.response.status;
      returnedError.message = (error.response.data as any).Message as string;
    } else {
      returnedError.code = 401;
      returnedError.message = 'Wystąpił błąd podczas generowania żadania';
    }
  } else {
    returnedError.message = error.message;
  }

  return returnedError;
};
