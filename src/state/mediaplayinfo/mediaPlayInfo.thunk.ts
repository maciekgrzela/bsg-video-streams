import axios, { AxiosError } from 'axios';
import { getMediaPlayInfoRequest } from '../../api/endpoints/mediaplayinfo/requests/getMediaPlayInfoRequest';
import { endpoints } from '../../api/httpClient';
import { prepareRequestError } from '../../helpers/prepareRequestError';
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
      const requestError = prepareRequestError(error);
      dispatch(getMediaPlayInfoFailed(requestError));
    }
  };

export const clearMediaPlayInfo = (): AppThunk => (dispatch, getState) => {
  dispatch(clearMediaPlayInfoSuccess());
};
