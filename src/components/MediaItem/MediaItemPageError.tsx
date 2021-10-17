import React from 'react';
import { RequestError } from '../../types/requestError';
import MediaItemPageGenericError from './MediaItemPageGenericError';
import MediaItemPagePurchaseSubscription from './MediaItemPagePurchaseSubscription';

interface MediaItemPageErrorProps {
  error: RequestError;
}

const MediaItemPageError = ({ error }: MediaItemPageErrorProps) => {
  if (error.code === 403) {
    return <MediaItemPagePurchaseSubscription />;
  }

  return (
    <MediaItemPageGenericError code={error.code} message={error.message} />
  );
};

export default MediaItemPageError;
