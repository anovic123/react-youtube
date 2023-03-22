import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { convertDuration, convertViews, titleSlice } from '../../utils/common';

import { RelatedContent } from '../../common/types/home';

import s from './style.module.scss';

export const HomeVideo: FC<{video: RelatedContent}> = ({ video: { video } }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/watch/${video.videoId}`}>
      <div className={s.container}>
        <div className={s.videoPreviewWrapper}>
          <img className={s.videoPreview} src={video.thumbnails[1].url} />
          <div className={s.videoDuration}>{convertDuration(video.lengthSeconds)}</div>
        </div>
        <div className={s.videoInfo}>
          <h2 className={s.videoTitle}>{titleSlice(video.title)}</h2>
          <div className={s.otherInfo}>
            {convertViews(video.stats.views)} {t('words.word1')}
          </div>
        </div>
      </div>
    </Link>
  );
};
