import React from 'react';
import { Link } from 'react-router-dom';

const MediaItemPageGetFullAccess = () => {
  return (
    <div className='media-item-page__full-access'>
      <span>
        Nie jesteś zalogowany. Aby uzyskać dostęp do pełnych treści{' '}
        <Link to='/login' className='media-item-page__subscribe'>
          zaloguj się
        </Link>{' '}
        na swoje konto i wykup subskrybcję
      </span>
    </div>
  );
};

export default MediaItemPageGetFullAccess;
