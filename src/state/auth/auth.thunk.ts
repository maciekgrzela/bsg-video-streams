import { loginAnonymousUserRequest } from '../../api/endpoints/auth/requests/loginAnonymousUserRequest';
import { AppThunk } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { endpoints } from '../../api/httpClient';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} from './auth.slice';
import { GenericResponse } from '../../types/genericResponse';
import { LoginUserResponseWithAnonymousProp } from '../../api/endpoints/auth/responses/loginUserResponse';
import { loginRegularUserRequest } from '../../api/endpoints/auth/requests/loginRegularUserRequest';
import { history } from '../..';

export const loginAnonymousUser =
  (): AppThunk => async (dispatch, getState) => {
    const loginRequest: loginAnonymousUserRequest = {
      device: {
        platformCode: 'WEB',
        name: uuidv4(),
      },
    };
    dispatch(loginStart());

    try {
      const user = await endpoints.auth.loginAnonymous(loginRequest);
      if (user.status === 200) {
        const payload =
          user as GenericResponse<LoginUserResponseWithAnonymousProp>;
        payload.data.IsAnonymous = true;
        dispatch(loginSuccess(payload));
      }
    } catch (e) {
      dispatch(loginFailed());
    }
  };

export const loginRegularUser =
  (userName: string, password: string): AppThunk =>
  async (dispatch, getState) => {
    const loginRequest: loginRegularUserRequest = {
      username: userName,
      password: password,
      device: {
        platformCode: 'WEB',
        name: uuidv4(),
      },
    };
    dispatch(loginStart());

    try {
      const user = await endpoints.auth.loginRegularUser(loginRequest);
      if (user.status === 200) {
        const payload =
          user as GenericResponse<LoginUserResponseWithAnonymousProp>;
        payload.data.IsAnonymous = false;
        dispatch(loginSuccess(payload));
        history.push('/');
      }
    } catch (e) {
      dispatch(loginFailed());
    }
  };

export const logoutUser = (): AppThunk => async (dispatch, getState) => {
  dispatch(logoutStart());

  try {
    dispatch(logoutSuccess());
    history.push('/');
  } catch (e) {
    dispatch(logoutFailed());
  }
};
