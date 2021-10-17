import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MediaItemPagePurchaseSubscription = () => {
  return (
    <div className='media-item-page__error'>
      <div className='media-item-page__subscription subscription-info'>
        <FaRegSadTear />
        <span className='subscription-info__text'>
          Twoja subskrypcja na prezentowany materiał wygasła! Aby uzyskać dostęp
          do materiału, przejdź do panelu klienta i dokonaj zakupu odpowiednich
          treści.
        </span>
        <button className='subscription-info__go-to-account'>
          <Link to='/account'>Przejdź do mojego konta</Link>
        </button>
      </div>
    </div>
  );
};

export default MediaItemPagePurchaseSubscription;
