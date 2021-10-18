import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../state/auth/auth.thunk';
import { RootState } from '../../state/root.reducer';
import MyAccountPageUserInfoItems from './MyAccountPageUserInfoItems';

const MyAccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className='my-account-page'>
      <div className='my-account-page__user-info user-info'>
        <header className='user-info__header'>
          <h1 className='user-info__welcome'>Witaj {user?.FullName}!</h1>
        </header>
        <MyAccountPageUserInfoItems user={user} />
        <button className='user-info__sign-out' onClick={handleSignOut}>
          Wyloguj
        </button>
        <button className='user-info__go-home'>
          <Link to='/'>Powrót do strony głównej</Link>
        </button>
      </div>
    </div>
  );
};

export default MyAccountPage;
