import axios, { AxiosError } from 'axios';
import { getMediaPlayInfoRequest } from '../../api/endpoints/mediaplayinfo/requests/getMediaPlayInfoRequest';
import { endpoints } from '../../api/httpClient';
import { RequestError } from '../../types/requestError';
import { AppThunk } from '../store';
import {
  clearMediaPlayInfoSuccess,
  getMediaPlayInfoFailed,
  getMediaPlayInfoStart,
  getMediaPlayInfoSuccess,
} from './mediaPlayInfo.slice';

export const getMediaPlayInfo =
  (id: number, access: string): AppThunk =>
  async (dispatch, getState) => {
    const mediaPlayInfoRequest: getMediaPlayInfoRequest = {
      mediaId: id,
      streamType: access,
    };
    dispatch(getMediaPlayInfoStart());
    try {
      const mediaPlayInfo = await endpoints.mediaPlayInfo.getMediaPlayInfo(
        mediaPlayInfoRequest
      );
      if (mediaPlayInfo.status === 200) {
        dispatch(getMediaPlayInfoSuccess(mediaPlayInfo.data));
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const requestError: RequestError = {
            code: error.response.status,
            message: (error.response.data as any).Message as string,
          };
          dispatch(getMediaPlayInfoFailed(requestError));
        } else if (error.request) {
          const requestError: RequestError = {
            code: 401,
            message: 'Wystąpił błąd podczas generowania żadania',
          };
          dispatch(getMediaPlayInfoFailed(requestError));
        }
      } else {
        const requestError: RequestError = {
          message: error.message,
        };
        dispatch(getMediaPlayInfoFailed(requestError));
      }
    }
  };

export const clearMediaPlayInfo = (): AppThunk => (dispatch, getState) => {
  dispatch(clearMediaPlayInfoSuccess());
};
