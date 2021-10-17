import { GetMediaPlayInfoResponse } from '../../api/endpoints/mediaplayinfo/responses/getMediaPlayInfoResponse';
import { RequestError } from '../../types/requestError';
import { RequestStatusType } from '../../types/requestStatusType';

export interface MediaPlayInfoState {
  status: {
    getMediaPlayInfo: RequestStatusType;
  };
  mediaPlayInfo: GetMediaPlayInfoResponse | null;
  mediaPlayInfoError: RequestError | null;
}

export const mediaPlayInfoInitState: MediaPlayInfoState = {
  status: {
    getMediaPlayInfo: RequestStatusType.INITIAL,
  },
  mediaPlayInfo: null,
  mediaPlayInfoError: null,
};
