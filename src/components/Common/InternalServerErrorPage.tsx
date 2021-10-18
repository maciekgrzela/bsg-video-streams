import React from 'react';
import ErrorPage from './ErrorPage';

const InternalServerErrorPage = () => {
  return (
    <ErrorPage
      code={500}
      content='Wystąpił błąd związany z działaniem serwera. Spróbuj ponownie później'
    />
  );
};

export default InternalServerErrorPage;
