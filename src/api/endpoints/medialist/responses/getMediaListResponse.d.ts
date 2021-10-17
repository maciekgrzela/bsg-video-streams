export interface GetMediaListResponse {
  CacheDataValidTo: Date;
  SourceType: string;
  Entities: MediaListEntity[];
}

export interface MediaListEntity {
  Id: number;
  Guid: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year: number;
  Duration: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: Date;
  Images: MediaListEntityImage[];
  Categories: MediaListEntityCategory[];
}

export interface MediaListEntityImage {
  Id: number;
  MediaId: number;
  PlatformCode: string;
  ImageTypeCode: string;
  Url: string;
  Width: number;
  Height: number;
}

export interface MediaListEntityCategory {
  CategoryId: number;
  CategoryCode: string;
  CategoryName: string;
}
