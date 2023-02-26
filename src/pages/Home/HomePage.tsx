import axios from 'axios';
import React, { useEffect } from 'react';
import { v1 } from 'uuid';
import relatedContents from '../../api/youtube-videos';
import { HomeVideo } from '../../components/HomeVideo/HomeVideo';
import { Loader } from '../../components/Loader/Loader';

import s from './HomePage.module.scss';

export interface IVideo {
  videoId: string;
  thumbnails: Array<any>;
  lengthSeconds: number;
  title: string;
  views: number;
}

export const HomePage = () => {
  const [videos, setVideos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    relatedContents().then((el) => {
      setVideos(el.data.contents);
      setIsLoading(false);
    });
  }, []);
  
  return (
    <>
      <div className={s.wrapper}>
        {isLoading ? <Loader /> : videos.map((vid: IVideo) => <HomeVideo key={v1()} video={vid} />)}
      </div>
    </>
  );
};
