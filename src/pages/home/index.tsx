import { FC, useEffect, useState } from 'react';
import { v1 } from 'uuid';

import { HomeVideo, Loader } from '../../components';

import getVideos from '../../api/youtube-videos';

import { Video } from '../../common/types/video/Video';

import s from './style.module.scss';

interface ApiResponse {
  contents: Video[];
}

export const HomePage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  let cancelRequest = false;

  useEffect(() => {
    document.title = 'YouTube - Main Page';

    const fetchData = async () => {
      try {
        const response: ApiResponse = await getVideos();

        if (!cancelRequest) {
          setVideos(response.contents);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    setError(null);
    fetchData();

    return () => {
      document.title = 'YouTube';
    };
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        {error && <div>{error}</div>}
        {isLoading ? <Loader /> : videos.map((v: any) => <HomeVideo key={v1()} video={v} />)}
      </div>
    </>
  );
};
