import { FC, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

import { HiOutlineThumbUp } from 'react-icons/hi';

import { Loader, RelatedContent } from '../../components';

import { useFetch } from '../../hooks/useFetch';

import { convertViews } from '../../utils/common';

import s from './style.module.scss';

export const VideoPage: FC = () => {
  const videoId = useParams().id;

  const { data, loading, error } = useFetch(`video/details/?id=${videoId}&hl=en&gl=US`);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    if (videoId === 'undefined' || !videoId) {
      return navigate('*');
    }
  }, [videoId])

  const viewsCount = convertViews(Number(data?.stats?.views));
  const likesCount = convertViews(Number(data?.stats?.likes));

  return (
    <div className={s.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={s.videoWrapper}>
            <div className={s.player}>
              <ReactPlayer
                url={`htpps://www.youtube.com/watch?v=${videoId}`}
                controls
                width={'100%'}
                height={'620px'}
              />
            </div>
            <div className={s.videoInfo}>
              <h3>{data?.title || 'Cute title'}</h3>
              <span>
                <span>{viewsCount}</span> {t('words.word1')}
              </span>
              <Link to="#">
                <div className={s.videoChanelWrapper}>
                  <div className={s.videoWrapper}>
                    <img
                      src={
                        data?.author?.avatar[0]?.url ||
                        'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
                      }
                      alt=""
                      className={s.videoAccount}
                    />
                    <div className={s.videoChannelTitle}>{data?.author?.title}</div>
                  </div>
                  <div className={s.videoStats}>
                    <div className={s.videoStatsLikes}>
                      <div className={s.videoLike}>
                        <HiOutlineThumbUp />
                        {likesCount}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {videoId && (
            <div className={s.videoRecomendation}>
              <RelatedContent id={videoId} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
