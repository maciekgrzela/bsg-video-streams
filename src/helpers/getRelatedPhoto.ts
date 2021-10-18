import { MediaListEntity } from '../api/endpoints/medialist/responses/getMediaListResponse';
import videoPlaceholder from '../assets/images/video-placeholder.png';
import { ImageTypeCode } from '../types/typeCodes';

export const getRelatedPhoto = (entity: MediaListEntity): string => {
  if (entity.Images.length === 0) {
    return videoPlaceholder;
  }

  const frameImage = entity.Images.find(
    (p) => p.ImageTypeCode === ImageTypeCode.FRAME
  );

  if (frameImage !== undefined) {
    return frameImage.Url;
  }

  return entity.Images[0].Url;
};
