import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const HeaderGoBackButton = () => {
  return (
    <button className='header__go-back'>
      <Link to='/'>
        <IoIosArrowBack />
      </Link>
    </button>
  );
};

export default HeaderGoBackButton;
