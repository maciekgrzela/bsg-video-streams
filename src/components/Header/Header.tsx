import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import HeaderGoBackButton from './HeaderGoBackButton';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [inverted, setInverted] = useState(false);

  const mediaPlayInfoTitle = useSelector(
    (state: RootState) => state.mediaPlayInfo.mediaPlayInfo?.Title
  );

  const handleNavbarChange = () => {
    if (window.scrollY > 50) {
      setInverted(true);
    } else {
      setInverted(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarChange);

    return () => {
      window.removeEventListener('scroll', handleNavbarChange);
    };
  }, []);

  return (
    <header className={inverted ? 'header header--inverted' : 'header'}>
      {mediaPlayInfoTitle !== undefined && <HeaderGoBackButton />}
      <HeaderLogo />
      {mediaPlayInfoTitle !== undefined && (
        <span className='header__now-playing'>{`Teraz odtwarzane: ${mediaPlayInfoTitle}`}</span>
      )}
      <HeaderNav />
    </header>
  );
};

export default Header;
