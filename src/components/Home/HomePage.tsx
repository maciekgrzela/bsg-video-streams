import React from 'react';
import HomePageMediaLists from './HomePageMediaLists';
import HomePageWelcome from './HomePageWelcome';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HomePageWelcome />
      <HomePageMediaLists />
    </div>
  );
};

export default HomePage;
