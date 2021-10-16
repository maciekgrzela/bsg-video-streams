import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { GenericResponse } from '../../types/genericResponse';
import { RequestStatusType } from '../../types/requestStatusType';
import { mediaListInitState, MediaListState } from './mediaList.state';

const mediaListSlice = createSlice({
  initialState: mediaListInitState,
  name: 'mediaList',
  reducers: {
    getFavoriteMediaListStart: (state: MediaListState) => {
      state.status.getFavoriteMediaList = RequestStatusType.PENDING;
    },
    getFavoriteMediaListSuccess: (
      state: MediaListState,
      action: PayloadAction<GenericResponse<GetMediaListResponse>>
    ) => {
      state.mediaFavoriteList = action.payload.data;
      state.status.getFavoriteMediaList = RequestStatusType.SUCCESS;
    },
    getFavoriteMediaListFailed: (state: MediaListState) => {
      state.status.getFavoriteMediaList = RequestStatusType.FAILURE;
    },

    getOtherMediaListsStart: (state: MediaListState) => {
      state.status.getOtherMediaLists = RequestStatusType.PENDING;
    },
    getOtherMediaListsSuccess: (
      state: MediaListState,
      action: PayloadAction<GetMediaListResponse[]>
    ) => {
      state.mediaLists = action.payload;
      state.status.getOtherMediaLists = RequestStatusType.SUCCESS;
    },
    getOtherMediaListsFailed: (state: MediaListState) => {
      state.status.getOtherMediaLists = RequestStatusType.FAILURE;
    },
  },
});

export const {
  getFavoriteMediaListStart,
  getFavoriteMediaListSuccess,
  getFavoriteMediaListFailed,
  getOtherMediaListsStart,
  getOtherMediaListsSuccess,
  getOtherMediaListsFailed,
} = mediaListSlice.actions;

export default mediaListSlice;
