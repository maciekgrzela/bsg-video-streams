import React from 'react';
import { Link } from 'react-router-dom';
import { MediaListEntity } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import videoPlaceholder from '../../assets/images/video-placeholder.png';
import MediaTypeBadge from '../Common/MediaTypeBadge';

interface HomePageRemainingPositionProps {
  entity: MediaListEntity;
}

const HomePageRemainingPosition = ({
  entity,
}: HomePageRemainingPositionProps) => {
  return (
    <li className='remaining-positions__item remaining-item'>
      <Link to={`/media/${entity.Id}`}>
        <img
          src={
            entity.Images.length === 0
              ? videoPlaceholder
              : entity.Images.find((p) => p.ImageTypeCode === 'FRAME')?.Url ||
                entity.Images[0].Url
          }
          className='remaining-item__image'
          alt={entity.Title}
        />
        <span className='remaining-item__title'>
          {entity.Title} <MediaTypeBadge mediaType={entity.MediaTypeCode} />
        </span>
      </Link>
    </li>
  );
};

export default HomePageRemainingPosition;
