import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  clearMediaPlayInfo,
  getMediaPlayInfo,
} from '../../state/mediaplayinfo/mediaPlayInfo.thunk';
import { RootState } from '../../state/root.reducer';
import { RequestStatusType } from '../../types/requestStatusType';
import SplashScreenPage from '../Splash/SplashScreenPage';
import MediaItemPageContentNotAvailable from './MediaItemPageContentNotAvailable';
import MediaItemPageError from './MediaItemPageError';

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
  }, [id]);

  useEffect(() => {
    console.log(mediaPlayInfo);
  }, [mediaPlayInfo]);

  if (mediaPlayInfoStatus === RequestStatusType.PENDING) {
    return <SplashScreenPage />;
  }

  return (
    <>
      {mediaPlayInfoError !== null && (
        <MediaItemPageError error={mediaPlayInfoError!} />
      )}
      <div className='media-item-page'>
        <div className='media-item-page__player'>
          {mediaPlayInfo?.ContentUrl !== undefined ? (
            <ReactPlayer
              width='100%'
              height='100%'
              controls={true}
              url={mediaPlayInfo?.ContentUrl}
            />
          ) : (
            <MediaItemPageContentNotAvailable />
          )}
        </div>
        <div className='media-item-page__info'>
          {mediaPlayInfo?.ContentUrl !== undefined && (
            <table className='media-item-page__table'>
              <tbody>
                <tr className='media-item-page__info-row'>
                  <td>Tytuł:</td>
                  <td>{mediaPlayInfo?.Title}</td>
                </tr>
                <tr className='media-item-page__info-row'>
                  <td>Typ mediów:</td>
                  <td>{mediaPlayInfo?.MediaTypeDisplayName}</td>
                </tr>
                <tr className='media-item-page__info-row'>
                  <td>Opis:</td>
                  <td>{mediaPlayInfo?.Description}</td>
                </tr>
                <tr className='media-item-page__info-row'>
                  <td>Dostęp:</td>
                  <td>
                    {user?.IsAnonymous ? 'Dostęp próbny' : 'Pełna wersja'}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {user?.IsAnonymous && (
            <div className='media-item-page__full-access'>
              <span>
                Nie jesteś zalogowany. Aby uzyskać dostęp do pełnych treści{' '}
                <Link to='/login' className='media-item-page__subscribe'>
                  zaloguj się
                </Link>{' '}
                na swoje konto i wykup subskrybcję
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MediaItemPage;
