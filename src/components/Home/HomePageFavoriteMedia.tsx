import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import videoPlaceholder from '../../assets/images/video-placeholder.png';
import PlayButton from '../Common/PlayButton';
import MediaTypeBadge from '../Common/MediaTypeBadge';

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
            src={
              mediaFavoriteItem.Images.length === 0
                ? videoPlaceholder
                : mediaFavoriteItem.Images.find(
                    (p) => p.ImageTypeCode === 'FRAME'
                  )?.Url || mediaFavoriteItem.Images[0].Url
            }
            alt='Favorite Moviess'
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
