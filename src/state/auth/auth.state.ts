import { RequestError } from '../../types/requestError';
import { RequestStatusType } from '../../types/requestStatusType';

export interface AuthState {
  status: {
    loginUser: RequestStatusType;
    logoutUser: RequestStatusType;
  };
  user: UserState | null;
  userError: RequestError | null;
  token: TokenInfo | null;
}

export interface UserState {
  Id: number;
  UserName: string;
  FullName: string;
  Email: string;
  ClientRoles: [];
  IsAnonymous: boolean;
}

interface TokenInfo {
  Token: string;
  TokenExpires: Date;
}

export const authInitState: AuthState = {
  status: {
    loginUser: RequestStatusType.INITIAL,
    logoutUser: RequestStatusType.INITIAL,
  },
  user: null,
  userError: null,
  token: null,
};
