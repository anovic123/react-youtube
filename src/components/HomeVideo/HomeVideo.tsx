import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import s from './HomeVideo.module.scss';


export const HomeVideo: React.FC<any> = ({ video }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/watch/${video.video.videoId}`}>
      <div className={s.container}>
        <div className={s.videoPreviewWrapper}>
          <img className={s.videoPreview} src={video.video.thumbnails[1].url} />
          <div className={s.videoDuration}>{convertDuration(video.video.lengthSeconds)}</div>
        </div>
        <div className={s.videoInfo}>
          <h2 className={s.videoTitle}>{titleSlice(video.video.title)}</h2>
          <div className={s.otherInfo}>
            {convertViews(video.video.stats.views)} {t('words.word1')}
          </div>
        </div>
      </div>
    </Link>
  );
};
