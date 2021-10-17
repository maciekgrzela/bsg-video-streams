import { getMediaListRequest } from '../../api/endpoints/medialist/requests/getMediaListRequest';
import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { endpoints } from '../../api/httpClient';
import { prepareRequestError } from '../../helpers/prepareRequestError';
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
      mediaListId: 3,
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
    } catch (e: any) {
      const requestError = prepareRequestError(e);
      dispatch(getFavoriteMediaListFailed(requestError));
    }
  };

export const getOtherMediaLists =
  (): AppThunk => async (dispatch, getState) => {
    dispatch(getOtherMediaListsStart());
    const mediaListsToFetch: GetMediaListResponse[] = [];

    const mediaListRequest: getMediaListRequest = {
      mediaListId: 4,
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

      mediaListRequest.mediaListId = 6;

      const mediaList2 = await endpoints.mediaList.getMediaList(
        mediaListRequest
      );

      mediaListsToFetch.push(mediaList.data);
      mediaListsToFetch.push(mediaList2.data);

      dispatch(getOtherMediaListsSuccess(mediaListsToFetch));
    } catch (e: any) {
      const requestError = prepareRequestError(e);
      dispatch(getOtherMediaListsFailed(requestError));
    }
  };
