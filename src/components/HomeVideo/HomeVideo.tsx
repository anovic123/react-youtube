import React from 'react';
import { Link } from 'react-router-dom';
import { IVideo } from '../../pages/Home/HomePage';
import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import s from './HomeVideo.module.css';

export const HomeVideo: React.FC<any> = ({ video }) => {
  return (
    <Link to={`/watch/${video.video.videoId}`}>
      <div className={s.container}>
        <div className={s.videoPreviewWrapper}>
          <img className={s.videoPreview} src={video.video.thumbnails[1].url} />
          <div className={s.videoDuration}>{convertDuration(video.video.lengthSeconds)}</div>
        </div>
        <div className={s.videoInfo}>
          <h2 className={s.videoTitle}>{titleSlice(video.video.title)}</h2>
          <div className={s.otherInfo}>{convertViews(video.video.stats.views)} просмотров</div>
        </div>
      </div>
    </Link>
  );
};
