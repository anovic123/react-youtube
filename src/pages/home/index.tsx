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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'YouTube - Main Page'

    const fetchData = async () => {
      const response: ApiResponse = await getVideos();
      // @ts-ignore
      setVideos(response.contents);
      setIsLoading(false);
    }

    setIsLoading(false);
    fetchData();

    return () => {
      document.title = 'YouTube';
    };
  }, [])

  return (
    <>
      <div className={s.wrapper}>
        {isLoading ? <Loader /> : videos.map((v: IVideo) => <HomeVideo key={v1()} video={v} />)}
      </div>
    </>
  );
};
