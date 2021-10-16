import { requests } from '../../httpClient';
import { getMediaPlayInfoRequest } from './requests/getMediaPlayInfoRequest';
import { GetMediaPlayInfoResponse } from './responses/getMediaPlayInfoResponse';

export const mediaPlayInfoEndpoints = {
  getMediaPlayInfo: (
    body: getMediaPlayInfoRequest
  ): Promise<GetMediaPlayInfoResponse> =>
    requests.post('/media/getMediaPlayInfo', body),
};
