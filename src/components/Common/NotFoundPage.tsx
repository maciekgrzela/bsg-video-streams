import React from 'react';
import ErrorPage from './ErrorPage';

const NotFoundPage = () => {
  return (
    <ErrorPage
      code={404}
      content='Poszukiwany przez Ciebie zasób nie został znaleziony. Przejdź do strony
    głównej i spróbuj ponownie wykonać określoną operację'
    />
  );
};

export default NotFoundPage;
