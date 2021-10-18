import React from 'react';
import { UserState } from '../../state/auth/auth.state';

interface MyAccountPageUserInfoItemsProps {
  user: UserState | null;
}

const MyAccountPageUserInfoItems = ({
  user,
}: MyAccountPageUserInfoItemsProps) => {
  return (
    <ul className='user-info__items'>
      <li className='user-info__item'>
        Nazwa użytkownika:{' '}
        <span className='text-weight-600'>{user?.Email}</span>
      </li>
      <li className='user-info__item'>
        Pełna nazwa: <span className='text-weight-600'>{user?.FullName}</span>
      </li>
      <li className='user-info__item'>
        Użytkownik anonimowy:{' '}
        <span className='text-weight-600'>
          {user?.IsAnonymous ? 'TAK' : 'NIE'}
        </span>
      </li>
    </ul>
  );
};

export default MyAccountPageUserInfoItems;
