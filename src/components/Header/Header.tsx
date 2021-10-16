import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo-img' src='' alt='BSG VideoStreams' />
        <span className='header__logo-text'>BSG VideoStreams</span>
      </div>
      <nav className='header__nav'>
        <ul className='header__categories'>
          <li className='header__category'>Kategoria 1</li>
          <li className='header__category'>Kategoria 2</li>
          <li className='header__category'>Kategoria 3</li>
          <li className='header__category'>Kategoria 4</li>
          <li className='header__category'>Kategoria 5</li>
        </ul>
        <button className='header__account'>
          {/* icon */}
          Zaloguj
        </button>
      </nav>
    </header>
  );
};

export default Header;
