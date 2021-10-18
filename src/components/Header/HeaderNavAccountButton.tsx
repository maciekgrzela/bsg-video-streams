import React from 'react';
import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../state/root.reducer';

const HeaderNavAccountButton = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <button className='nav__account-button'>
      <Link to={{ pathname: user?.IsAnonymous ? '/login' : '/account' }}>
        <BiUser />
        {user?.IsAnonymous ? 'Zaloguj się!' : user?.FullName}
      </Link>
    </button>
  );
};

export default HeaderNavAccountButton;
