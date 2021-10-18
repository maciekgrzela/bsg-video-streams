import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import { useLocation } from 'react-router';
import HeaderNavAccountButton from './HeaderNavAccountButton';
import HeaderNavCategory from './HeaderNavCategory';

const HeaderNav = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  const location = useLocation();

  const otherMediaLists = useSelector(
    (state: RootState) => state.mediaList.mediaLists
  );

  const handleToggled = (value: boolean) => {
    setToggled(value);
  };

  return (
    <nav
      className={toggled ? 'header__nav nav nav--toggled' : 'header__nav nav'}
    >
      <span className='nav__toggle-menu' onClick={() => handleToggled(true)}>
        <BiMenuAltRight />
      </span>
      <span className='nav__hide-menu' onClick={() => handleToggled(false)}>
        <IoMdClose />
      </span>
      {otherMediaLists.length > 0 && location.pathname === '/' && (
        <ul className='nav__categories'>
          {otherMediaLists.map((mediaList, idx) => (
            <HeaderNavCategory key={idx} idx={idx} />
          ))}
        </ul>
      )}
      <HeaderNavAccountButton />
    </nav>
  );
};

export default HeaderNav;
