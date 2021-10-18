import React from 'react';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

interface LoginPageFormItemProps {
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  label: string;
  placeholder: string;
  type: string;
}

const LoginPageFormItem = ({
  input,
  meta,
  label,
  placeholder,
  type,
}: LoginPageFormItemProps) => {
  return (
    <div className='login-form__form-control'>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export default LoginPageFormItem;
