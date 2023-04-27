import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import { RelatedContentType } from '../../common/types/home';

import s from './style.module.scss';

interface HomeVideoProps {
  video: RelatedContentType;
}

export const HomeVideo: FC<HomeVideoProps> = ({ video: { video } }) => {
  const { t } = useTranslation();

  if (!video) {
    return null;
  }

  return (
    <Link to={`/watch/${video?.videoId}`}>
      <div className={s.container}>
        <div className={s.videoPreviewWrapper}>
          <img className={s.videoPreview} src={video?.thumbnails[1].url} />
          <div className={s.videoDuration}>
            {(video?.lengthSeconds && convertDuration(video?.lengthSeconds)) || '0h 0m'}
          </div>
        </div>
        <div className={s.videoInfo}>
          <h2 className={s.videoTitle}>
            {(video?.title && titleSlice(video?.title)) || 'Pure title'}
          </h2>
          <div className={s.otherInfo}>
            {convertViews(video?.stats.views)} {t('words.word1')}
          </div>
        </div>
      </div>
    </Link>
  );
};
