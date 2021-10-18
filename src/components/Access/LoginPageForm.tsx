import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { ValidationErrors } from 'final-form';
import { useDispatch } from 'react-redux';
import { loginRegularUser } from '../../state/auth/auth.thunk';
import LoginPageFormItem from './LoginPageFormItem';

const loginValidator = (values: any): ValidationErrors => {
  const errors: any = {};
  const emailExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.userName) {
    errors.userName = 'Pole wymagane';
  }

  if (!emailExpression.test(values.userName)) {
    errors.userName = 'Nieprawidłowa struktura pola';
  }

  if (!values.password) {
    errors.password = 'Pole wymagane';
  }

  return errors;
};

interface FormValues {
  userName: string;
  password: string;
}

const LoginPageForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (data: FormValues) => {
    dispatch(loginRegularUser(data.userName, data.password));
  };

  return (
    <FinalForm
      onSubmit={handleLogin}
      validate={loginValidator}
      render={({ handleSubmit, invalid, pristine }) => (
        <form className='login-page__form login-form' onSubmit={handleSubmit}>
          <Field name='userName'>
            {({ input, meta }) => (
              <LoginPageFormItem
                input={input}
                meta={meta}
                type='email'
                label='Nazwa użytkownika:'
                placeholder='Wprowadź nazwę użytkownika'
              />
            )}
          </Field>
          <Field name='password'>
            {({ input, meta }) => (
              <LoginPageFormItem
                input={input}
                meta={meta}
                type='password'
                label='Hasło:'
                placeholder='Wprowadź hasło'
              />
            )}
          </Field>
          <button type='submit' disabled={invalid || pristine}>
            Zaloguj się!
          </button>
        </form>
      )}
    />
  );
};

export default LoginPageForm;
