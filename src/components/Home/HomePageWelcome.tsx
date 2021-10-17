import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import HomePageFavoriteMedia from './HomePageFavoriteMedia';
import HomePageRemainingPositions from './HomePageRemainingPositions';
import { Link as ScrollLink } from 'react-scroll';

const HomePageWelcome = () => {
  return (
    <section className='home-page__welcome welcome'>
      <HomePageFavoriteMedia />
      <HomePageRemainingPositions />
      <button className='welcome__go-further'>
        <ScrollLink to='list1' offset={-100} smooth={true}>
          <IoIosArrowDown />
        </ScrollLink>
      </button>
    </section>
  );
};

export default HomePageWelcome;
