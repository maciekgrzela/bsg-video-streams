import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root.reducer';
import LoginPageForm from './LoginPageForm';

const LoginPage = () => {
  const userError = useSelector((state: RootState) => state.auth.userError);

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <header className='login-page__header'>
          <h3 className='text-weight-800'>Wkrocz do świata rozrywki!</h3>
        </header>
        <LoginPageForm />
        {userError && (
          <div className='login-page__error'>{userError.message}</div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
