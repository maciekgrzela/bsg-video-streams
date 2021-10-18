import React from 'react';
import { MediaListEntity } from '../../api/endpoints/medialist/responses/getMediaListResponse';
import HomePageMediaListItem from './HomePageMediaListItem';

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
          <HomePageMediaListItem key={idx} entity={entity} />
        ))}
      </ul>
    </div>
  );
};

export default HomePageMediaListContainer;
