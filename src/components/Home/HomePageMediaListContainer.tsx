import React from 'react';
import { MediaListEntity } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import PlayButton from '../Common/PlayButton';
import videoPlaceholder from '../../assets/images/video-placeholder.png';
import MediaTypeBadge from '../Common/MediaTypeBadge';

interface HomePageMediaListContainerProps {
  value: number;
  entities: MediaListEntity[];
}

const HomePageMediaListContainer = ({
  value,
  entities,
}: HomePageMediaListContainerProps) => {
  return (
    <div
      id={`list${value + 1}`}
      className='media-lists__container media-element'
    >
      <header className='media-element__header'>
        <h2 className='media-element__title'>Filmy z listy nr: {value + 1}</h2>
      </header>
      <ul className='media-element__list'>
        {entities.map((entity, idx) => (
          <li key={idx} className='media-element__item media-item'>
            <div className='media-item__playback'>
              <div className='media-item__badge'>
                <MediaTypeBadge mediaType={entity.MediaTypeCode} />
              </div>
              <img
                src={
                  entity.Images.length === 0
                    ? videoPlaceholder
                    : entity.Images.find((p) => p.ImageTypeCode === 'FRAME')
                        ?.Url || entity.Images[0].Url
                }
                alt={entity.Title}
                className='media-item__image'
              />
              <PlayButton
                resource={entity.Id}
                externalClassName='media-item__play'
              />
            </div>

            <div className='media-item__content'>
              <h3 className='media-item__title'>{entity.Title}</h3>
              <p className='media-item__desc'>
                {entity.Description.length > 150 ? (
                  <>{`${entity.Description.substr(0, 150)}...`}</>
                ) : (
                  <>{entity.Description}</>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageMediaListContainer;
