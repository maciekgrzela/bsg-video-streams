import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMediaPlayInfoResponse } from '../../api/endpoints/mediaplayinfo/responses/getMediaPlayInfoResponse';
import { RequestError } from '../../types/requestError';
import { RequestStatusType } from '../../types/requestStatusType';
import {
  mediaPlayInfoInitState,
  MediaPlayInfoState,
} from './mediaPlayInfo.state';

const mediaPlayInfoSlice = createSlice({
  initialState: mediaPlayInfoInitState,
  name: 'mediaPlayInfo',
  reducers: {
    getMediaPlayInfoStart: (state: MediaPlayInfoState) => {
      state.status.getMediaPlayInfo = RequestStatusType.PENDING;
    },
    getMediaPlayInfoSuccess: (
      state: MediaPlayInfoState,
      action: PayloadAction<GetMediaPlayInfoResponse>
    ) => {
      state.mediaPlayInfo = action.payload;
      state.status.getMediaPlayInfo = RequestStatusType.SUCCESS;
    },
    getMediaPlayInfoFailed: (
      state: MediaPlayInfoState,
      action: PayloadAction<RequestError>
    ) => {
      state.mediaPlayInfoError = action.payload;
      state.status.getMediaPlayInfo = RequestStatusType.FAILURE;
    },
    clearMediaPlayInfoSuccess: (state: MediaPlayInfoState) => {
      state.mediaPlayInfo = null;
      state.mediaPlayInfoError = null;
    },
  },
});

export const {
  getMediaPlayInfoStart,
  getMediaPlayInfoSuccess,
  getMediaPlayInfoFailed,
  clearMediaPlayInfoSuccess,
} = mediaPlayInfoSlice.actions;

export default mediaPlayInfoSlice;
