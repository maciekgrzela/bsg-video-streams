import { RequestStatusType } from '../../types/requestStatusType';

export interface AuthState {
  status: {
    loginUser: RequestStatusType;
    logoutUser: RequestStatusType;
  };
  user: UserState | null;
  token: TokenInfo | null;
}

interface UserState {
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
  token: null,
};
