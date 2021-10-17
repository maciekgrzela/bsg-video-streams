import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router';
import { IoIosArrowBack, IoMdClose } from 'react-icons/io';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const [inverted, setInverted] = useState(false);
  const [toggled, setToggled] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const otherMediaLists = useSelector(
    (state: RootState) => state.mediaList.mediaLists
  );
  const mediaPlayInfoTitle = useSelector(
    (state: RootState) => state.mediaPlayInfo.mediaPlayInfo?.Title
  );
  const location = useLocation();

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
      {mediaPlayInfoTitle !== undefined && (
        <button className='header__go-back'>
          <Link to='/'>
            <IoIosArrowBack />
          </Link>
        </button>
      )}
      <div className='header__logo logo'>
        <img className='logo__img' src={logo} alt='BSG' />
        <span className='logo__text'>
          <Link to='/'>BSG VideoStreams</Link>
        </span>
      </div>
      {mediaPlayInfoTitle !== undefined && (
        <span className='header__now-playing'>{`Teraz odtwarzane: ${mediaPlayInfoTitle}`}</span>
      )}
      <nav
        className={toggled ? 'header__nav nav nav--toggled' : 'header__nav nav'}
      >
        <span className='nav__toggle-menu' onClick={() => setToggled(true)}>
          <BiMenuAltRight />
        </span>
        <span className='nav__hide-menu' onClick={() => setToggled(false)}>
          <IoMdClose />
        </span>
        {otherMediaLists !== null &&
          otherMediaLists.length > 0 &&
          location.pathname === '/' && (
            <ul className='nav__categories'>
              {otherMediaLists.map((mediaList, idx) => (
                <li key={idx} className='nav__category'>
                  <ScrollLink to={`list${idx + 1}`} offset={-100} smooth={true}>
                    Lista {idx + 1}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
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
