import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  code: number;
  content: string;
}

const ErrorPage = ({ code, content }: ErrorPageProps) => {
  return (
    <div className='error-page'>
      <h1 className='error-page__code'>{code}</h1>
      <p className='error-page__text'>{content}</p>
      <button className='error-page__go-home'>
        <Link to='/'>Powrót do strony głównej</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
