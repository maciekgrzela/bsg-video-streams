import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { ValidationErrors } from 'final-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginRegularUser } from '../../state/auth/auth.thunk';
import { RootState } from '../../state/root.reducer';

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

const LoginPage = () => {
  const dispatch = useDispatch();
  const userError = useSelector((state: RootState) => state.auth.userError);

  const handleLogin = (data: FormValues) => {
    dispatch(loginRegularUser(data.userName, data.password));
  };

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <header className='login-page__header'>
          <h3 className='text-weight-800'>Wkrocz do świata rozrywki!</h3>
        </header>
        <FinalForm
          onSubmit={handleLogin}
          validate={loginValidator}
          render={({ handleSubmit, invalid, form, pristine, submitting }) => (
            <form
              className='login-page__form login-form'
              onSubmit={handleSubmit}
            >
              <Field name='userName'>
                {({ input, meta }) => (
                  <div className='login-form__form-control'>
                    <label>Nazwa użytkownika:</label>
                    <input
                      {...input}
                      type='email'
                      placeholder='Wprowadź nazwę użytkownika'
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name='password'>
                {({ input, meta }) => (
                  <div className='login-form__form-control'>
                    <label>Hasło:</label>
                    <input
                      {...input}
                      type='password'
                      placeholder='Wprowadź hasło'
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <button type='submit' disabled={invalid || pristine}>
                Zaloguj się!
              </button>
            </form>
          )}
        />
        {userError && (
          <div className='login-page__error'>{userError.message}</div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
