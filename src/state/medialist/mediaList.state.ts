import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { RequestStatusType } from '../../types/requestStatusType';

export interface MediaListState {
  status: {
    getFavoriteMediaList: RequestStatusType;
    getOtherMediaLists: RequestStatusType;
  };
  mediaLists: GetMediaListResponse[];
  mediaFavoriteList: GetMediaListResponse | null;
}

export const mediaListInitState: MediaListState = {
  status: {
    getFavoriteMediaList: RequestStatusType.INITIAL,
    getOtherMediaLists: RequestStatusType.INITIAL,
  },
  mediaLists: [],
  mediaFavoriteList: null,
};
