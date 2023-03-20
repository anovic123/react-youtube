import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';
import ReactPlayer from 'react-player';

import { HiOutlineThumbUp } from 'react-icons/hi';

import { RecVideoItem, Loader } from '../../components';

import getVideoInfo from '../../api/youtube-video-info';

import { convertViews } from '../../utils/common';

import s from './style.module.scss';

export const VideoPage = () => {
  const [data, setData] = useState<any>({});
  // console.log('🚀 ~ file: index.tsx:19 ~ VideoPage ~ data:', data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const videoId = useParams().id;

  const { t } = useTranslation();

  // useEffect(() => {
  //   if (!videoId) return;
  //   getVideoInfo(videoId)
  //     .then((response: any) => {
  //       setIsLoading(true);
  //       document.title = `${response.data.title} - YouTube`;
  //       setData(response.data);
  //     })
  //     .catch((error: Error) => {
  //       console.error(error.message);
  //     })
  //     .finally(() => setIsLoading(false));

  //   return () => {
  //     document.title = 'YouTube';
  //   };
  // }, [videoId]);

  let cancelRequest = false;

  // useEffect(() => {
  //   if (!videoId) return;

  //   const fetchData = async () => {
  //     try {
  //       const response: any = await getVideoInfo(videoId);

  //       if (!cancelRequest) {
  //         document.title = `${response.title} - YouTube`;
  //         setData(response);
  //         setIsLoading(false);
  //       }
  //     } catch (error: any) {
  //       console.error(error);
  //       setError(error.message);
  //       setIsLoading(false);
  //     }

  //     setIsLoading(true);
  //     setError(null);
  //     fetchData();
  //   };
  // }, [videoId]);

  // useEffect(() => {
  //   if (!videoId) return;
  //   setIsLoading(true);
  //   youtubeRelatedContent(videoId)
  //     .then((response: any) => {
  //       setRecVideos(response.data.contents);
  //     })
  //     .catch((error: Error) => {
  //       console.error(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [videoId]);

  const viewsCount = convertViews(Number(data?.stats?.views));
  const likesCount = convertViews(Number(data?.stats?.likes));

  return (
    <div className={s.container}>
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
          <h3>{data.title}</h3>
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
      {/* <div className={s.videoRecomendation}>
        {isLoading ? <Loader /> : recVideos.map((r) => <RecVideoItem key={v1()} data={r} />)}
      </div> */}
    </div>
  );
};
