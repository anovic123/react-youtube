import React from 'react';
import { Link } from 'react-router-dom';
import { DataProps } from '../../types/Search';

import s from './VideoCard.module.scss';

export const VideoCard: React.FC<DataProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={s.container}>
      <Link to={`/watch/${data.video.videoId}`}>
        <img
          src={data.video.thumbnails[0].url}
          alt="video thumbnail"
          className={s.videoThumbnail}
        />
      </Link>
      <div className={s.videoInfo}>
        <Link to={`/watch/${data.video.videoId}`}>
          <div className={s.videoName}>{data.video.title}</div>
        </Link>
        <div className={s.videoDate}></div>
        <Link to="#">
          <div className={s.videoChannel}>
            <img src={data.video.author.avatar[0].url} />
            <div className={s.videoChannelTitle}>{data.video.author.title}</div>
          </div>
        </Link>
        <p className={s.videoDescription}>{data.video.descriptionSnippet}</p>
      </div>
    </div>
  );
};
