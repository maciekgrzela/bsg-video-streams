export interface LoginUserResponse {
  result: {
    user: {
      id: string;
      username: string;
      fullname: string;
      clientRoles: [];
    };
    authorizationToken: {
      authResult: string;
      token: string;
      tokenExpires: Date;
    };
  };
  resultType: string;
}
