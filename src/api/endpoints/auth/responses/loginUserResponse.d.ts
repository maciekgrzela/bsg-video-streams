export interface LoginUserResponse {
  User: {
    Id: number;
    UserName: string;
    FullName: string;
    ClientRoles: [];
  };
  AuthorizationToken: {
    Token: string;
    TokenExpires: Date;
  };
}

export interface LoginUserResponseWithAnonymousProp extends LoginUserResponse {
  IsAnonymous: boolean;
}
