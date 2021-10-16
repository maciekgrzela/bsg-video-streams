import { GetMediaPlayInfoResponse } from '../../api/endpoints/mediaplayinfo/responses/getMediaPlayInfoResponse';
import { RequestStatusType } from '../../types/requestStatusType';

export interface MediaPlayInfoState {
  status: {
    getMediaPlayInfo: RequestStatusType;
  };
  mediaPlayInfo: GetMediaPlayInfoResponse | null;
}

export const mediaPlayInfoInitState: MediaPlayInfoState = {
  status: {
    getMediaPlayInfo: RequestStatusType.INITIAL,
  },
  mediaPlayInfo: null,
};
