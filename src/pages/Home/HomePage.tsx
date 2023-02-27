import axios from 'axios';
import React, { useEffect } from 'react';
import { domainToUnicode } from 'url';
import { v1 } from 'uuid';
import relatedContents from '../../api/youtube-videos';
import { HomeVideo } from '../../components/HomeVideo/HomeVideo';
import { Loader } from '../../components/Loader/Loader';
import { IVideo } from '../../types/Video';

import s from './HomePage.module.scss';

export const HomePage = () => {
  const [videos, setVideos] = React.useState<IVideo[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    relatedContents().then((el) => {
      setVideos(el.data.contents);
      setIsLoading(false);
    });

    document.title = 'YouTube - Main Page';

    return () => {
      document.title = 'YouTube'
    }
  }, []);
  
  return (
    <>
      <div className={s.wrapper}>
        {isLoading ? <Loader /> : videos.map((vid: IVideo) => <HomeVideo key={v1()} video={vid} />)}
      </div>
    </>
  );
};
