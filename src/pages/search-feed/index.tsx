import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';

import { VideoCard, Loader } from '../../components';

import youtubeSearch from '../../api/youtube-search';

import { Video } from '../../common/types/video/Video';

interface ApiResponse {
  contents: Video[];
}

export const SearchFeed: FC = () => {
  const [result, setResult] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { searchTerm } = useParams();

  const { t } = useTranslation();

  let cancelRequest = false;

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      try {
        const response: ApiResponse = await youtubeSearch(searchTerm);

        if (!cancelRequest) {
          setResult(response.contents);
          document.title = `${searchTerm} - YouTube`;
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
  }, [searchTerm]);

  // @ts-ignore
  const videos = result.filter((v: Video) => v.type === 'video');

  return (
    <>
      <h3 style={{ marginBottom: 20, color: 'red' }}>
        {t('search.search1')} <span>{searchTerm}</span>
      </h3>
      {error && <div>{error}</div>}
      {isLoading ? <Loader /> : videos.map((v: any) => <VideoCard key={v1()} data={v} />)}
    </>
  );
};
