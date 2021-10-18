import React from 'react';
import ReactPlayer from 'react-player';
import { GetMediaPlayInfoResponse } from '../../api/endpoints/mediaplayinfo/responses/getMediaPlayInfoResponse';
import MediaItemPageContentNotAvailable from './MediaItemPageContentNotAvailable';

interface MediaItemPagePlayerProps {
  mediaPlayInfo: GetMediaPlayInfoResponse | null;
}

const MediaItemPagePlayer = ({ mediaPlayInfo }: MediaItemPagePlayerProps) => {
  return (
    <div className='media-item-page__player'>
      {mediaPlayInfo?.ContentUrl !== undefined ? (
        <ReactPlayer
          width='100%'
          height='100%'
          controls={true}
          url={mediaPlayInfo?.ContentUrl}
        />
      ) : (
        <MediaItemPageContentNotAvailable />
      )}
    </div>
  );
};

export default MediaItemPagePlayer;
