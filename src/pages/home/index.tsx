import { useEffect, useState } from 'react';
import { v1 } from 'uuid';

import { HomeVideo, Loader } from '../../components';

import getVideos from '../../api/youtube-videos';

import { IVideo } from '../../types/Video';

import s from './style.module.scss';

interface ApiResponse {
  data: {
    contents: IVideo[];
  };
}

export const HomePage = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  console.log('🚀 ~ file: index.tsx:20 ~ HomePage ~ videos:', videos);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setVideos(() => new Array(12));
  }, []);

  let cancelRequest = false;

  useEffect(() => {
    document.title = 'YouTube - Main Page';

    const fetchData = async () => {
      try {
        const response: ApiResponse = await getVideos();

        if (!cancelRequest) {
          // @ts-ignore
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
        {isLoading ? <Loader /> : videos.map((v: IVideo) => <HomeVideo key={v1()} video={v} />)}
      </div>
    </>
  );
};
