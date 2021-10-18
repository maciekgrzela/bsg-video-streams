import React from 'react';
import { MediaListEntity } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import MediaTypeBadge from '../Common/MediaTypeBadge';
import PlayButton from '../Common/PlayButton';
import { prepareTextSlice } from '../../helpers/prepareTextSlice';
import { getRelatedPhoto } from '../../helpers/getRelatedPhoto';
import Moment from 'react-moment';

interface HomePageMediaListItemProps {
  entity: MediaListEntity;
}

const HomePageMediaListItem = ({ entity }: HomePageMediaListItemProps) => {
  return (
    <li className='media-element__item media-item'>
      <div className='media-item__playback'>
        <div className='media-item__badge'>
          <MediaTypeBadge mediaType={entity.MediaTypeCode} />
          <img src={entity.MediaAgeRestrictionImageUrl} alt='Pegi info' />
        </div>
        <img
          src={getRelatedPhoto(entity)}
          alt={entity.Title}
          className='media-item__image'
        />
        <PlayButton resource={entity.Id} externalClassName='media-item__play' />
      </div>
      <div className='media-item__content'>
        <h3 className='media-item__title'>{entity.Title}</h3>
        <p className='media-item__desc'>
          {prepareTextSlice(entity.Description, 150)}
        </p>
        {entity.AvailableFrom.toString()[0] !== '0' && (
          <span className='media-item__available'>
            Dostępne od:{' '}
            <Moment format='YYYY-MM-DD'>{entity.AvailableFrom}</Moment>
          </span>
        )}
      </div>
    </li>
  );
};

export default HomePageMediaListItem;
