import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginUserResponseWithAnonymousProp } from '../../api/endpoints/auth/responses/loginUserResponse';
import { GenericResponse } from '../../types/genericResponse';
import { RequestStatusType } from '../../types/requestStatusType';
import { authInitState, AuthState } from './auth.state';

const authSlice = createSlice({
  initialState: authInitState,
  name: 'auth',
  reducers: {
    loginStart: (state: AuthState) => {
      state.status.loginUser = RequestStatusType.PENDING;
    },
    loginSuccess: (
      state: AuthState,
      action: PayloadAction<GenericResponse<LoginUserResponseWithAnonymousProp>>
    ) => {
      state.user = {
        ...action.payload.data.User,
        IsAnonymous: action.payload.data.IsAnonymous,
      };
      state.token = action.payload.data.AuthorizationToken;

      if (sessionStorage.getItem('jwt')) {
        sessionStorage.removeItem('jwt');
      }
      sessionStorage.setItem(
        'jwt',
        action.payload.data.AuthorizationToken.Token
      );
      state.status.loginUser = RequestStatusType.SUCCESS;
    },
    loginFailed: (state: AuthState) => {
      state.status.loginUser = RequestStatusType.FAILURE;
    },
  },
});

export default authSlice;

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;
