export interface LoginUserResponse {
  User: {
    Id: number;
    UserName: string;
    FullName: string;
    ClientRoles: [];
    Email: string;
  };
  AuthorizationToken: {
    Token: string;
    TokenExpires: Date;
  };
}

export interface LoginUserResponseWithAnonymousProp extends LoginUserResponse {
  IsAnonymous: boolean;
}
