import React from 'react';
import { GetMediaPlayInfoResponse } from '../../api/endpoints/mediaplayinfo/responses/getMediaPlayInfoResponse';
import { UserState } from '../../state/auth/auth.state';
import MediaItemPageGetFullAccess from './MediaItemPageGetFullAccess';

interface MediaItemPageTitleInfoProps {
  mediaPlayInfo: GetMediaPlayInfoResponse | null;
  user: UserState | null;
}

const MediaItemPageTitleInfo = ({
  mediaPlayInfo,
  user,
}: MediaItemPageTitleInfoProps) => {
  return (
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
              <td>{user?.IsAnonymous ? 'Dostęp próbny' : 'Pełna wersja'}</td>
            </tr>
          </tbody>
        </table>
      )}
      {user?.IsAnonymous && <MediaItemPageGetFullAccess />}
    </div>
  );
};

export default MediaItemPageTitleInfo;
