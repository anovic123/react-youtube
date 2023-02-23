import React, { useEffect } from 'react';
import { v1 } from 'uuid';
import relatedContents from '../../api/youtube-videos';
import { HomeVideo } from '../../components/HomeVideo/HomeVideo';

import s from './HomePage.module.css';

export interface IVideo {
  videoId: string;
  thumbnails: Array<any>;
  lengthSeconds: number;
  title: string;
  views: number;
}

export const HomePage = () => {
  const [videos, setVideos] = React.useState([]);

  useEffect(() => {
    relatedContents().then((el) => {
      setVideos(el.data.contents);
    });
  }, []);
  // console.log(videos);

  return (
    <>
      <div className={s.wrapper}>
        {videos.map((vid: IVideo) => (
          <HomeVideo key={v1()} video={vid}/>
        ))}
      </div>
    </>
  );
};
