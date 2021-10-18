import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const HeaderLogo = () => {
  return (
    <div className='header__logo logo'>
      <img className='logo__img' src={logo} alt='BSG' />
      <span className='logo__text'>
        <Link to='/'>BSG VideoStreams</Link>
      </span>
    </div>
  );
};

export default HeaderLogo;
