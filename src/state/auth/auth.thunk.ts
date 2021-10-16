import { loginAnonymousUserRequest } from '../../api/endpoints/auth/requests/loginAnonymousUserRequest';
import { AppThunk } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { endpoints } from '../../api/httpClient';
import { loginFailed, loginStart, loginSuccess } from './auth.slice';
import { GenericResponse } from '../../types/genericResponse';
import { LoginUserResponseWithAnonymousProp } from '../../api/endpoints/auth/responses/loginUserResponse';

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
      console.log(e);
      dispatch(loginFailed());
    }
  };
