import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import HomePageRemainingPosition from './HomePageRemainingPosition';

const HomePageRemainingPositions = () => {
  const mediaFavoriteList = useSelector(
    (state: RootState) => state.mediaList.mediaFavoriteList
  );

  return (
    <>
      {mediaFavoriteList !== null && mediaFavoriteList.Entities.length > 0 && (
        <div className='welcome__remaining-positions remaining-positions'>
          <ul className='remaining-positions__list'>
            {mediaFavoriteList.Entities.map((entity, idx) => (
              <HomePageRemainingPosition key={idx} entity={entity} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HomePageRemainingPositions;
