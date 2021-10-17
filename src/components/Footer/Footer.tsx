import React from 'react';
import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className='footer'>
      {location.pathname === '/' && (
        <span className='footer__content'>
          <span>Made with 💗 by Maciej Grzela &copy; 2021</span>
          <span>
            Zamieszczone obrazy oraz treści video należą do ich twórców
          </span>
        </span>
      )}
    </footer>
  );
};

export default Footer;
