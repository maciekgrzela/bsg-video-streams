import React from 'react';

interface MediaTypeBadgeProps {
  mediaType: string;
}

const MediaTypeBadge = ({ mediaType }: MediaTypeBadgeProps) => {
  return (
    <div className={`media-badge media-badge--${mediaType.toLowerCase()}`}>
      <span>{mediaType}</span>
    </div>
  );
};

export default MediaTypeBadge;
