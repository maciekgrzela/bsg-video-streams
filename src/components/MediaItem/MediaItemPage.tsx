import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  clearMediaPlayInfo,
  getMediaPlayInfo,
} from '../../state/mediaplayinfo/mediaPlayInfo.thunk';
import { RootState } from '../../state/root.reducer';
import { RequestStatusType } from '../../types/requestStatusType';
import SplashScreenPage from '../Splash/SplashScreenPage';
import MediaItemPagePlayer from './MediaItemPagePlayer';
import MediaItemPageError from './MediaItemPageError';
import MediaItemPageTitleInfo from './MediaItemPageTitleInfo';

const MediaItemPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const mediaPlayInfoStatus = useSelector(
    (state: RootState) => state.mediaPlayInfo.status.getMediaPlayInfo
  );
  const mediaPlayInfo = useSelector(
    (state: RootState) => state.mediaPlayInfo.mediaPlayInfo
  );
  const mediaPlayInfoError = useSelector(
    (state: RootState) => state.mediaPlayInfo.mediaPlayInfoError
  );
  const { id } = useParams<{ id?: string | undefined }>();

  useEffect(() => {
    if (id !== null && id !== undefined) {
      const mediaId = parseInt(id);
      dispatch(getMediaPlayInfo(mediaId, user?.IsAnonymous ? 'TRIAL' : 'MAIN'));
    }

    return () => {
      dispatch(clearMediaPlayInfo());
    };
  }, [id, dispatch, user?.IsAnonymous]);

  if (mediaPlayInfoStatus === RequestStatusType.PENDING) {
    return <SplashScreenPage />;
  }

  return (
    <>
      {mediaPlayInfoError !== null && (
        <MediaItemPageError error={mediaPlayInfoError!} />
      )}
      <div className='media-item-page'>
        <MediaItemPagePlayer mediaPlayInfo={mediaPlayInfo} />
        <MediaItemPageTitleInfo mediaPlayInfo={mediaPlayInfo} user={user} />
      </div>
    </>
  );
};

export default MediaItemPage;
