import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import youtubeSearch from '../../api/youtube-search';
import { Loader } from '../../components/Loader/Loader';
import { v1 } from 'uuid';

import s from './SearchFeed.module.scss';
import { VideoCard } from '../../components/VideoCard/VideoCard';

export const SearchFeed = () => {
  const [result, setResult] = useState<any>([]);
  const [pageToken, setPageToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchTerm } = useParams();

  useEffect(() => {
    document.title = `${result} - YouTube`;
    setIsLoading(true);
    // youtubeSearch(`${searchTerm}`).then((response: any) => setResult(response.data));
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

  // console.log(result);
  // console.log(pageToken);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h3 style={{ marginBottom: 20, color: 'red' }}>
          Search Results for: <span>{searchTerm}</span>
        </h3>
        {isLoading ? (
          <Loader />
        ) : (
          result.map((r: any) => (
            <div>
              {<VideoCard key={v1()} data={r} />}
              {/* {r.type.channel && <div key={v1()}>{r.type.channel}</div>} */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
