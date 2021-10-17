import {
  GetMediaListResponse,
  MediaListEntity,
} from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { RequestError } from '../../types/requestError';
import { RequestStatusType } from '../../types/requestStatusType';

export interface MediaListState {
  status: {
    getFavoriteMediaList: RequestStatusType;
    getOtherMediaLists: RequestStatusType;
  };
  mediaLists: GetMediaListResponse[];
  mediaListsError: RequestError | null;
  mediaFavoriteList: GetMediaListResponse | null;
  mediaFavoriteItem: MediaListEntity | null;
  mediaFavoriteListError: RequestError | null;
}

export const mediaListInitState: MediaListState = {
  status: {
    getFavoriteMediaList: RequestStatusType.INITIAL,
    getOtherMediaLists: RequestStatusType.INITIAL,
  },
  mediaLists: [],
  mediaListsError: null,
  mediaFavoriteList: null,
  mediaFavoriteItem: null,
  mediaFavoriteListError: null,
};
