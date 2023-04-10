import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RelatedContent } from '../../common/types/home';
import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import s from './style.module.scss';

export const RecVideoItem: FC<RelatedContent> = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoDur = convertDuration(Number(video?.lengthSeconds));
  const viewsCount = convertViews(Number(video?.stats?.views));

  return (
    <div className={s.container}>
      <div className={s.videoWrapper}>
        <Link to={`/watch/${video.videoId}`}>
          <img src={video.thumbnails[1].url} className={s.videoImage} alt="Video thumbnail" />
        </Link>
        <div className={s.videoDuration}>{videoDur}</div>
      </div>
      <div className={s.videoInfo}>
        <Link to={`watch/${video.videoId}`}>
          <h3 className={s.videoTitle}>{titleSlice(video.title)}</h3>
        </Link>
        <Link to="#">
          <span className={s.channelTitle}>{video.author.title}</span>
        </Link>
        <div className={s.videoViews}>{viewsCount || 0}</div>
      </div>
    </div>
  );
};
