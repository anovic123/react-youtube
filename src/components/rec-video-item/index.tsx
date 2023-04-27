import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import { RelatedContentType } from '../../common/types/home';

import s from './style.module.scss';

export const RecVideoItem: FC<RelatedContentType> = ({ video }) => {
  if (!video) {
    return null;
  }

  const navigate = useNavigate();

  const videoDur = convertDuration(Number(video?.lengthSeconds));
  const viewsCount = convertViews(Number(video?.stats?.views));

  return (
    <div className={s.container}>
      <div className={s.videoWrapper}>
        <a className={s.videoLink} onClick={() => navigate(`/watch/${video.videoId}`)}>
          <img src={video.thumbnails[1].url} className={s.videoImage} alt="Video thumbnail" />
        </a>
        <div className={s.videoDuration}>{videoDur}</div>
      </div>
      <div className={s.videoInfo}>
        <a className={s.videoLink} onClick={() => navigate(`/watch/${video.videoId}`)}>
          <h3 className={s.videoTitle}>{titleSlice(video.title)}</h3>
        </a>
        <Link to="#">
          <span className={s.channelTitle}>{video.author.title}</span>
        </Link>
        <div className={s.videoViews}>{viewsCount || 0}</div>
      </div>
    </div>
  );
};
