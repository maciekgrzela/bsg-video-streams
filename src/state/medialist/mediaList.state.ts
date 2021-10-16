import { GetMediaListResponse } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import { RequestStatusType } from '../../types/requestStatusType';

export interface MediaListState {
  status: {
    getMediaList: RequestStatusType;
  };
  mediaLists: GetMediaListResponse[];
}

export const mediaListInitState: MediaListState = {
  status: {
    getMediaList: RequestStatusType.INITIAL,
  },
  mediaLists: [],
};
