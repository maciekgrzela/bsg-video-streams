import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inverted, setInverted] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleNavbarChange = () => {
    if (window.scrollY > 50) {
      setInverted(true);
    } else {
      setInverted(false);
    }
  };

  window.addEventListener('scroll', handleNavbarChange);

  return (
    <header className={inverted ? 'header header--inverted' : 'header'}>
      <div className='header__logo logo'>
        <img className='logo__img' src={logo} alt='BSG' />
        <span className='logo__text'>BSG VideoStreams</span>
      </div>
      <nav className='header__nav nav'>
        <ul className='nav__categories'>
          <li className='nav__category'>Kategoria 1</li>
          <li className='nav__category'>Kategoria 2</li>
          <li className='nav__category'>Kategoria 3</li>
          <li className='nav__category'>Kategoria 4</li>
          <li className='nav__category'>Kategoria 5</li>
        </ul>
        <button className='nav__account-button'>
          {user?.IsAnonymous ? (
            <Link to={{ pathname: '/login' }}>
              <BiUser />
              Zaloguj się!
            </Link>
          ) : (
            <Link to={{ pathname: '/account' }}>
              <BiUser />
              {user?.FullName}
            </Link>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
