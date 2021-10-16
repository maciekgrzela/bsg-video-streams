export interface GetMediaListResponse {
  cacheDataValidTo: Date;
  sourceType: string;
  entities: mediaListEntity[];
}

interface mediaListEntity {
  id: string;
  guid: string;
  mediaTypeCode: string;
  mediaTypeDisplayName: string;
  mediaAgeRestrictionValueMin: number;
  mediaAgeRestrictionImageUrl: string;
  title: string;
  description: string;
  year: number;
  duration: number;
  isTrialContentAvailable: boolean;
  availableFrom: Date;
  images: mediaListEntityImage[];
}

interface mediaListEntityImage {
  id: number;
  mediaId: number;
  platformCode: string;
  imageTypeCode: string;
  url: string;
  width: number;
  height: number;
}
