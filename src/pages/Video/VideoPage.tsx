import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';
import { convertViews } from '../../utils/common';
import youtubeVideoinfo from '../../api/youtube-videoinfo';
import youtubeRelatedContent from '../../api/youtube-related-contents';
import { HiOutlineThumbUp } from 'react-icons/hi';
import { RecVideoItem } from '../../components/RecVideoItem/RecVideoItem';

import s from './VideoPage.module.scss';
import { Loader } from '../../components/Loader/Loader';

export const VideoPage = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recVideos, setRecVideos] = useState([]);
  const videoId = useParams().id;

  const { t } = useTranslation();

  useEffect(() => {
    youtubeVideoinfo(videoId)
      .then((response: any) => {
        setIsLoading(true);
        document.title = `${response.data.title} - YouTube`;
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error: Error) => {
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));

    return () => {
      document.title = 'YouTube';
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    youtubeRelatedContent(videoId)
      .then((response: any) => {
        setRecVideos(response.data.contents);
      })
      .catch((error: Error) => {
        console.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [videoId]);

  // console.log(videoId);

  // console.log(recVideos);

  const viewsCount = convertViews(Number(data.stats?.views));
  const likesCount = convertViews(Number(data.stats?.likes));

  return (
    <div className={s.container}>
      <div className={s.videoWrapper}>
        <div className={s.player}>
          <ReactPlayer
            url={`htpps://www.youtube.com/watch?v=${videoId}`}
            controls
            width={'100%'}
            height={'520px'}
          />
        </div>
        <div className={s.videoInfo}>
          <h3>{data.title}</h3>
          <span>
            <span>{viewsCount}</span> {t('words.word1')}
          </span>
          <Link to="#">
            <div className={s.videoChanelWrapper}>
              <div className={s.videoWrapp}>
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
      <div className={s.videoRecomendation}>
        {isLoading ? <Loader /> : recVideos.map((r) => <RecVideoItem key={v1()} data={r} />)}
      </div>
    </div>
  );
};
