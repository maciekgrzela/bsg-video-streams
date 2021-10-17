import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface MediaItemPageGenericErrorProps {
  code?: number;
  message: string;
}

const MediaItemPageGenericError = ({
  code,
  message,
}: MediaItemPageGenericErrorProps) => {
  return (
    <div className='media-item-page__error'>
      <div className='media-item-page__generic-error media-generic-error'>
        <FaRegSadTear />
        {code !== undefined && (
          <span className='media-generic-error__text'>
            Status błędu: {code}
          </span>
        )}
        <span className='media-generic-error__text'>
          Treść błędu: {message}
        </span>
        <button className='media-generic-error__go-to-account'>
          <Link to='/'>Przejdź do strony głównej</Link>
        </button>
      </div>
    </div>
  );
};

export default MediaItemPageGenericError;
