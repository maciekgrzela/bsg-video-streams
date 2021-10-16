import { getMediaListRequest } from '../../api/endpoints/medialist/requests/getMediaListRequest';
import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { endpoints } from '../../api/httpClient';
import { AppThunk } from '../store';
import {
  getFavoriteMediaListFailed,
  getFavoriteMediaListStart,
  getFavoriteMediaListSuccess,
  getOtherMediaListsFailed,
  getOtherMediaListsStart,
  getOtherMediaListsSuccess,
} from './mediaList.slice';

export const getFavoriteMediaList =
  (): AppThunk => async (dispatch, getState) => {
    const mediaListRequest: getMediaListRequest = {
      mediaListId: 2,
      pageNumber: 1,
      pageSize: 15,
      includeCategories: true,
      includeImages: true,
      includeMedia: true,
    };
    dispatch(getFavoriteMediaListStart());
    try {
      const favoriteMediaList = await endpoints.mediaList.getMediaList(
        mediaListRequest
      );
      if (favoriteMediaList.status === 200) {
        dispatch(getFavoriteMediaListSuccess(favoriteMediaList));
      }
    } catch (e) {
      console.log(e);
      dispatch(getFavoriteMediaListFailed());
    }
  };

export const getOtherMediaLists =
  (): AppThunk => async (dispatch, getState) => {
    dispatch(getOtherMediaListsStart());
    const mediaListsToFetch: GetMediaListResponse[] = [];

    const mediaListRequest: getMediaListRequest = {
      mediaListId: 3,
      pageNumber: 1,
      pageSize: 15,
      includeCategories: true,
      includeImages: true,
      includeMedia: true,
    };

    try {
      const mediaList = await endpoints.mediaList.getMediaList(
        mediaListRequest
      );
      mediaListRequest.mediaListId++;
      const mediaList2 = await endpoints.mediaList.getMediaList(
        mediaListRequest
      );

      if (mediaList.status !== 200 || mediaList2.status !== 200) {
        dispatch(getOtherMediaListsFailed());
        return;
      }

      mediaListsToFetch.push(mediaList.data);
      mediaListsToFetch.push(mediaList2.data);

      dispatch(getOtherMediaListsSuccess(mediaListsToFetch));
    } catch (e) {
      dispatch(getOtherMediaListsFailed());
    }
  };
