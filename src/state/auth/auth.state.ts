import { LoginUserResponse } from '../../api/endpoints/auth/responses/loginUserResponse';
import { RequestStatusType } from '../../types/requestStatusType';

export interface AuthState {
  status: {
    loginAnonymousUser: RequestStatusType;
    loginRegularUser: RequestStatusType;
  };
  user: LoginUserResponse | null;
  token: string | null;
}

export const authInitState: AuthState = {
  status: {
    loginAnonymousUser: RequestStatusType.INITIAL,
    loginRegularUser: RequestStatusType.INITIAL,
  },
  user: null,
  token: null,
};
