import { RequestStatusType } from '../../types/requestStatusType';

export interface AuthState {
  status: {
    loginUser: RequestStatusType;
  };
  user: UserState | null;
  token: TokenInfo | null;
}

interface UserState {
  Id: number;
  UserName: string;
  FullName: string;
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
  },
  user: null,
  token: null,
};
