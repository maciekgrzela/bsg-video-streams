import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface PlayButtonProps {
  externalClassName?: string;
  resource: number;
}

const PlayButton = ({ externalClassName, resource }: PlayButtonProps) => {
  return (
    <div
      className={
        externalClassName ? `${externalClassName} play-button` : 'play-button'
      }
    >
      <Link to={{ pathname: `/media/${resource}` }}>
        <FiPlay />
      </Link>
    </div>
  );
};

export default PlayButton;
