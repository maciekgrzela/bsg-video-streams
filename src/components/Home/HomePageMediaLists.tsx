import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';

import HomePageMediaListContainer from './HomePageMediaListContainer';

const HomePageMediaLists = () => {
  const otherMediaLists = useSelector(
    (state: RootState) => state.mediaList.mediaLists
  );

  return (
    <>
      {otherMediaLists !== null && otherMediaLists.length > 0 && (
        <section className='home-page__media-lists media-lists'>
          {otherMediaLists.map((mediaList, idx) => (
            <HomePageMediaListContainer
              key={idx}
              value={idx}
              entities={mediaList.Entities}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default HomePageMediaLists;
