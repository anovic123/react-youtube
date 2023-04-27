import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ContentVideo } from '../../common/types/video/Video';
import { convertDuration } from '../../utils/common';

import s from './style.module.scss';

interface VideoCardProps {
  data: ContentVideo;
}

export const VideoCard: FC<VideoCardProps> = ({ data: { video } }) => {
  return (
    <div className={s.container}>
      <Link to={`/watch/${video.videoId}`}>
        <img src={video.thumbnails[0].url} alt="video thumbnail" className={s.videoThumbnail} />
      </Link>
      <div className={s.videoInfo}>
        <Link to={`/watch/${video.videoId}`}>
          <div className={s.videoName}>{video.title}</div>
        </Link>
        <div className={s.videoDate}></div>
        <Link to="#">
          <div className={s.videoChannel}>
            <img src={video.author.avatar[0].url} />
            <div className={s.videoChannelTitle}>{video.author.title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
