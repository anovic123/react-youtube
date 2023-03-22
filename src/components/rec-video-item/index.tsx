import { FC } from 'react';
import { Link } from 'react-router-dom';
import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import s from './style.module.scss';

export const RecVideoItem: FC<any> = ({ data }) => {
  console.log("🚀 ~ file: index.tsx:8 ~ data:", data)
  const d = data.video;

  const videoDur = convertDuration(Number(d.lengthSeconds));
  const viewsCount = convertViews(Number(d.stats.views));

  return (
    <div className={s.container}>
      <div className={s.videoWrapper}>
        <Link to={`/watch/${d.videoId}`}>
          <img src={d.thumbnails[1].url} className={s.videoImage} />
        </Link>
        <div className={s.videoDuration}>{videoDur}</div>
      </div>
      <div className={s.videoInfo}>
        <Link to={`watch/${d.videoId}`}>
          <h3 className={s.videoTitle}>{titleSlice(d.title)}</h3>
        </Link>
        <Link to="#">
          <span className={s.channelTitle}>{d.author.title}</span>
        </Link>
        <div className={s.videoViews}>{viewsCount}</div>
      </div>
    </div>
  );
};
