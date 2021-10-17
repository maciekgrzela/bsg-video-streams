import React from 'react';
import { ImWarning } from 'react-icons/im';

const MediaItemPageContentNotAvailable = () => {
  return (
    <div className='media-item-page__not-available content-not-available'>
      <ImWarning />
      <span className='content-not-available__info'>
        Treści które próbujesz załadować są aktualnie niedostępne
      </span>
    </div>
  );
};

export default MediaItemPageContentNotAvailable;
