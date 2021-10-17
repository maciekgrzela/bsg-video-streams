import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../state/auth/auth.thunk';
import { RootState } from '../../state/root.reducer';

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
        <ul className='user-info__items'>
          <li className='user-info__item'>
            Nazwa użytkownika:{' '}
            <span className='text-weight-600'>{user?.Email}</span>
          </li>
          <li className='user-info__item'>
            Pełna nazwa:{' '}
            <span className='text-weight-600'>{user?.FullName}</span>
          </li>
          <li className='user-info__item'>
            Użytkownik anonimowy:{' '}
            <span className='text-weight-600'>
              {user?.IsAnonymous ? 'TAK' : 'NIE'}
            </span>
          </li>
        </ul>
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
