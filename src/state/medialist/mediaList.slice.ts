import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { GenericResponse } from '../../types/genericResponse';
import { RequestError } from '../../types/requestError';
import { RequestStatusType } from '../../types/requestStatusType';
import { MediaTypeCode } from '../../types/typeCodes';
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
      let favoriteItem = action.payload.data.Entities.find(
        (p) =>
          p.MediaTypeCode === MediaTypeCode.VOD ||
          p.MediaTypeCode === MediaTypeCode.LIVE
      );

      if (favoriteItem === undefined) {
        favoriteItem = action.payload.data.Entities[0];
      }

      state.mediaFavoriteItem = favoriteItem;

      state.mediaFavoriteList = {
        CacheDataValidTo: action.payload.data.CacheDataValidTo,
        SourceType: action.payload.data.SourceType,
        Entities: action.payload.data.Entities.filter(
          (p) =>
            p.Id !== favoriteItem?.Id &&
            (p.MediaTypeCode === MediaTypeCode.VOD ||
              p.MediaTypeCode === MediaTypeCode.LIVE)
        ),
      };
      state.status.getFavoriteMediaList = RequestStatusType.SUCCESS;
      state.mediaFavoriteListError = null;
    },
    getFavoriteMediaListFailed: (
      state: MediaListState,
      action: PayloadAction<RequestError>
    ) => {
      state.mediaFavoriteListError = action.payload;
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
      state.mediaListsError = null;
    },
    getOtherMediaListsFailed: (
      state: MediaListState,
      action: PayloadAction<RequestError>
    ) => {
      state.mediaListsError = action.payload;
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
