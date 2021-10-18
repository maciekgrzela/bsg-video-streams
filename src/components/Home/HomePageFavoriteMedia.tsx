import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import PlayButton from '../Common/PlayButton';
import MediaTypeBadge from '../Common/MediaTypeBadge';
import { getRelatedPhoto } from '../../helpers/getRelatedPhoto';

const HomePageFavoriteMedia = () => {
  const mediaFavoriteItem = useSelector(
    (state: RootState) => state.mediaList.mediaFavoriteItem
  );

  return (
    <>
      {mediaFavoriteItem !== null && (
        <div className='welcome__favorite-media'>
          <img
            className='welcome__favorite-media-image'
            src={getRelatedPhoto(mediaFavoriteItem)}
            alt={mediaFavoriteItem.Title}
          />
          <div className='welcome__favorite-media-content'>
            <h1 className='welcome__favorite-media-title'>
              {`${mediaFavoriteItem.Title} (${mediaFavoriteItem.Year})`}
              <MediaTypeBadge mediaType={mediaFavoriteItem.MediaTypeCode} />
            </h1>
            <p className='welcome__favorite-media-desc'>
              {mediaFavoriteItem.Description}
            </p>
          </div>
          <PlayButton
            resource={mediaFavoriteItem.Id}
            externalClassName='welcome__favorite-media-play-button'
          />
        </div>
      )}
    </>
  );
};

export default HomePageFavoriteMedia;
