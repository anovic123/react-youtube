import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import youtubeSearch from '../../api/youtube-search';
import { Loader } from '../../components/Loader/Loader';
import { v1 } from 'uuid';

import s from './SearchFeed.module.scss';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import { useTranslation } from 'react-i18next';
import { DataProps } from '../../types/Search';

export const SearchFeed = () => {
  const [result, setResult] = useState<DataProps[]>([]);
  const [pageToken, setPageToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchTerm } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${result} - YouTube`;
    setIsLoading(true);
    youtubeSearch(`${searchTerm}`)
      .then((response) => {
        setResult([...response.data.contents]);
        setPageToken(response.data.cursorNext);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));

    return () => {
      document.title = 'YouTube';
    };
  }, [searchTerm]);

  console.log(result);
  // console.log(pageToken);
  const videos = result.filter((r: any) => r.type === 'video')
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h3 style={{ marginBottom: 20, color: 'red' }}>
          {t('search.search1')} <span>{searchTerm}</span>
        </h3>
        {isLoading ? (
          <Loader />
        ) : (
          videos.map((v: any) => (
            <div>
              <VideoCard key={v1()} data={v} />
            </div>
          ))
          
        )}
      </div>
    </div>
  );
};
