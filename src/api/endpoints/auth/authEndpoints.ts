import { GenericResponse } from '../../../types/genericResponse';
import { requests } from '../../httpClient';
import { loginAnonymousUserRequest } from './requests/loginAnonymousUserRequest';
import { loginRegularUserRequest } from './requests/loginRegularUserRequest';
import { LoginUserResponse } from './responses/loginUserResponse';

export const authEndpoints = {
  loginAnonymous: (
    body: loginAnonymousUserRequest
  ): Promise<GenericResponse<LoginUserResponse>> =>
    requests.post('/authorization/signIn', body),
  loginRegularUser: (
    body: loginRegularUserRequest
  ): Promise<GenericResponse<LoginUserResponse>> =>
    requests.post('/authorization/signIn', body),
};
