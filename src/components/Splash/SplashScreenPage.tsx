import React from 'react';
import Loader from 'react-loader-spinner';

const SplashScreenPage = () => {
  return (
    <div className='splash-screen'>
      <div className='splash-screen__loader'>
        <Loader
          type='MutatingDots'
          color='red'
          secondaryColor='white'
          height={100}
          width={100}
        />
      </div>
      <span className='splash-screen__content'>Ładowanie zawartości</span>
    </div>
  );
};

export default SplashScreenPage;
