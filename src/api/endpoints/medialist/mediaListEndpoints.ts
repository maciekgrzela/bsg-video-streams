import { requests } from '../../httpClient';
import { getMediaListRequest } from './requests/getMediaListRequest';
import { GetMediaListResponse } from './responses/getMediaListResponse';

export const mediaListEndpoints = {
  getMediaList: (body: getMediaListRequest): Promise<GetMediaListResponse> =>
    requests.post('/media/getMediaList', body),
};
