import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getOtherMediaLists } from '../../state/medialist/mediaList.thunk';

interface HomePageMediaListsErrorProps {
  code?: number;
  message: string;
}

const HomePageMediaListsError = ({
  code,
  message,
}: HomePageMediaListsErrorProps) => {
  const dispatch = useDispatch();

  const handleReload = () => {
    dispatch(getOtherMediaLists());
  };

  return (
    <div className='home-page__lists-error media-lists-error'>
      <FaRegSadTear />
      <span className='media-lists-error__text'>
        Wystąpił błąd podczas próby uzyskania danych z serwera. Kod błędu:
        {code}. Treść błędu: {message}
      </span>
      <button className='media-lists-error__reload' onClick={handleReload}>
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default HomePageMediaListsError;
